import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.snogylop";
import "leaflet/dist/leaflet.css";
import "polyline-encoded";

import React, { useEffect, useRef, useState } from "react";

import { latLngBounds } from "leaflet";
import path from "path";
import { GeoJSON, LayersControl, MapContainer, Marker, Pane, Polyline, Popup, TileLayer, useMap } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";

import { getAllCountriesData, groupBy } from "../../utils/map-utils.js";
import MapPrint from "./map-print";
import { AwesomeIconToMarker } from "./marker";
import RoutingMachine from "./routing-machine";

// Component which shows the given markers and route an an Mapbox map. Additionally, unimportant countries can be masked
// TODO: Think about better protecting the credentials, i.e. make the call on the server side (--> remove the NEXT_PUBLIC_ prefix after doing)
export default function PoiMap({ markers, route, notMaskedCountries, maskOpacity = 0.5 }) {
    //#region Constants
    const DEFAULT_ZOOM = 10;
    const DEFAULT_CENTER = { lat: 52.3758916, lon: 9.7320104 }; // Hannover

    const USE_ROUTING_MACHINE = false;
    //#endregion

    //#region MaskCountries
    // It should be possible to show only those countries, selected by the user. The remaining are masked.
    // TODO: Optimize this, such that not almost all countries have to be loaded, i.e. invert the result

    const [geoJsons, setGeoJsons] = useState([]);

    var countryMaskStyle = {
        fillColor: "#a5b1c2",
        fillOpacity: maskOpacity,
        color: "#a5b1c2",
    };

    // Due to performance issue (see TODO above) this is currently only possible for European countries (incl. Turkey)
    const allCountriesData = getAllCountriesData();
    const countriesByContinents = groupBy(allCountriesData, (c) => {
        return c.continentCode;
    });
    const europeanCountries = countriesByContinents.get("EU");
    const tur = allCountriesData.get("TUR");
    europeanCountries.push(tur);

    async function fetchGeoJsons(selectedCountries) {
        if (selectedCountries == null || selectedCountries == "") {
            setGeoJsons([]);
            return;
        }

        var fetchedGeoJsons = [];
        for await (const country of selectedCountries) {
            fetch(path.join(process.cwd(), `./geojson/${country.alpha3}.geojson`))
                .then((resp) => resp.json())
                .then((data) => {
                    // Remove marker (capital and geografic middle)
                    var cleanedFeatures = [];
                    data.features.forEach((feature) => {
                        if (feature.geometry.type === "Point") {
                            return;
                        }

                        cleanedFeatures.push(feature);
                    });
                    data.features = cleanedFeatures;

                    fetchedGeoJsons.push({ key: country.alpha3, data: data });
                });
        }

        setGeoJsons(fetchedGeoJsons);
    }

    useEffect(() => {
        if (notMaskedCountries.length > 0) {
            let maskedCountries = europeanCountries.filter((el) => !notMaskedCountries.includes(el.alpha3));
            // console.log("maskedCountries", maskedCountries);
            fetchGeoJsons(maskedCountries);
        } else {
            fetchGeoJsons(null);
        }
    }, [notMaskedCountries]);
    //#endregion

    //#region Routing
    // Either use react-leaflet build-in routing machine or calculate the route yourself by calling the OSMR API.
    // The former is easier but the requests may become to larger for longer journeys
    // The behavior can be configured using the USE_ROUTING_MACHINE const
    const routingMachineRef = useRef(null);
    const [polyline, setPolyline] = useState(null);

    useEffect(() => {
        if (USE_ROUTING_MACHINE) {
            if (routingMachineRef.current && route.waypoints.length > 1) {
                // Set waypoints
                const newWaypoints = route.waypoints.map(({ lat, lon }) => L.latLng(lat, lon));
                routingMachineRef.current.setWaypoints(newWaypoints);

                // Set color
                routingMachineRef.current.options.lineOptions.styles[0].color = route.color;
            }
        } else {
            async function calculateRoute(coordinates) {
                if (coordinates == null || coordinates.length < 2) {
                    return;
                }

                coordinates.sort((a, b) => a.rank < b.rank);

                var requestOptions = {
                    method: "GET",
                    redirect: "follow",
                    cache: "no-store",
                };

                let coordinatesString = "";
                coordinates.forEach((c) => {
                    coordinatesString += `${c.lon.toFixed(6)},${c.lat.toFixed(6)};`;
                });
                coordinatesString = coordinatesString.slice(0, -1); // Remove the last character
                const url = `https://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=full`;

                fetch(url, requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                        const resultJson = JSON.parse(result);

                        const encoded = resultJson.routes[0].geometry;
                        const polyline = L.Polyline.fromEncoded(encoded);
                        const route = {
                            encode: encoded,
                            polyline: polyline,
                        };

                        setPolyline(route);
                    })
                    .catch((error) => console.log("error", error));
            }

            calculateRoute(route.waypoints);
        }
    }, [route]);
    //#endregion

    //#region CameraHandling
    // Default: Zoom on map such that all markers are shown
    function ChangeView({ markers }) {
        const map = useMap();

        let markerBounds = latLngBounds([]);
        markers.forEach((marker) => {
            if (marker.enabled) {
                markerBounds.extend([marker.lat, marker.lon]);
            }
        });

        markerBounds.isValid() && map.fitBounds(markerBounds);

        return null;
    }
    //#endregion

    //#region Marker
    function getIcon(marker, index) {
        switch (marker.type) {
            case "Home":
                return AwesomeIconToMarker({ iconName: "location-pin-house", color: marker.color });
            case "POI":
                return AwesomeIconToMarker({
                    iconName: "location-pin-number-" + (index + 1),
                    color: marker.color,
                });
            // Maybe use other dedicated pins as well
            case "Routing":

            case "Stage":

            default:
                return AwesomeIconToMarker({ iconName: "location-pin", color: marker.color });
        }
    }

    // const markers = [...homes, ...pois];
    // const enabledCount = pois.filter((p) => p.enabled == true).length;
    const homes = markers.filter((p) => p.type === "Home");
    const pois = markers.filter((p) => p.type === "POI");
    // console.log("homes map", homes);
    //#endregion

    //#region Misc
    // Print sizes
    var photoSizeLandscape = {
        width: 1080 * 2,
        height: 1920,
        className: "photoSizeLandscape",
        name: "Panorama",
    };

    var photoSizePortrait = {
        width: 3648,
        height: 5472,
        className: "photoSizePortrait",
        name: "Photo Size (Portrait)",
    };
    //#endregion

    return (
        <>
            {/* <Statistic title={"POIs"} value={pois.length} />
            <Statistic title={"Enabled"} value={enabledCount} /> */}
            {/* <Statistic title={"selected"} value={geoJSON2.length} /> */}

            <MapContainer
                center={homes[0] ?? DEFAULT_CENTER}
                zoom={DEFAULT_ZOOM}
                scrollWheelZoom={true}
                style={{ height: 700, width: "100%" }}
            >
                {/* Base Map (incl. the routing) */}
                <Pane name="base" style={{ zIndex: 100 }}>
                    <ChangeView center={homes[0] ?? DEFAULT_CENTER} markers={markers} />

                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="OSM">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Mapbox">
                            <TileLayer
                                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                                url={`https://api.mapbox.com/styles/v1/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
                            />
                        </LayersControl.BaseLayer>
                    </LayersControl>

                    <FullscreenControl />
                    <MapPrint
                        position="topright"
                        sizeModes={["Current", "A4Portrait", "A4Landscape", photoSizeLandscape]}
                        hideControlContainer={true}
                        title="Export as PNG"
                        exportOnly
                    />

                    {USE_ROUTING_MACHINE ? (
                        <RoutingMachine waypoints={route.waypoints} linecolor={route.color} ref={routingMachineRef} />
                    ) : polyline != null ? (
                        <Polyline positions={polyline.polyline.getLatLngs()} color={route.color} weight={4} />
                    ) : null}
                </Pane>

                {/* POIs */}
                <Pane name="poi" style={{ zIndex: 1000 }}>
                    {/* {markers.map((m, index) =>
                    m.enabled ? (
                        <Marker key={m.name} position={[m.lat, m.lon]} icon={GetIcon(m, index + 1)}>
                            <Popup>{m.name}</Popup>
                        </Marker>
                    ) : (
                        <></>
                    ),
                )} */}
                    {homes.map((h) =>
                        h.enabled ? (
                            <Marker
                                key={h.name}
                                position={[h.lat, h.lon]}
                                icon={AwesomeIconToMarker({ iconName: "location-pin-house", color: h.color })}
                            >
                                <Popup>{h.name}</Popup>
                            </Marker>
                        ) : (
                            <></>
                        ),
                    )}
                    {pois.map((p, index) =>
                        p.enabled ? (
                            <Marker
                                key={p.name + p.id}
                                position={[p.lat, p.lon]}
                                icon={AwesomeIconToMarker({
                                    iconName: "location-pin-number-" + (index + 1),
                                    color: p.color,
                                })}
                            >
                                <Popup>{p.name}</Popup>
                            </Marker>
                        ) : (
                            <></>
                        ),
                    )}
                </Pane>

                {/* CountryMask */}
                <Pane name="countryMask" style={{ zIndex: 800 }}>
                    {geoJsons.map((p, index) => (
                        <GeoJSON data={p.data} style={countryMaskStyle} key={p.key} />
                    ))}
                </Pane>
            </MapContainer>
        </>
    );
}
