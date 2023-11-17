// import React from "react";
import React, { useState, useEffect, useRef } from "react";
import { latLngBounds } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, LayersControl, GeoJSON, Pane } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./routing-machine";
import "leaflet.snogylop";
import { Statistic } from "antd";

import { promises as fs } from "fs";
import path from "path";

import { AwesomeIconToMarker, SvgMarker } from "./marker";
import MapPrint from "./map-print";

const PoiMap = ({ markers, route, countryMask }) => {
    const DEFAULT_ZOOM = 10;
    const DEFAULT_CENTER = { lat: 52.3758916, lon: 9.7320104 }; // Hannover

    const routingMachineRef = useRef(null);

    const [geoJSON, setGeoJSON] = useState(null);
    const [geojsonName, setGeojsonName] = useState("undef");

    const fetchGeoJSON = (countryMask) => {
        console.log("Get geojson for " + countryMask);

        if (countryMask == null || countryMask == "") {
            setGeoJSON(null);
            setGeojsonName("undef");
            return;
        }

        fetch(path.join(process.cwd(), `./geojson/${countryMask}.geojson`))
            .then((resp) => resp.json())
            .then((data) => {
                // console.log("data fetched", data);
                setGeoJSON(data);
                setGeojsonName(countryMask);
            });
    };

    React.useEffect(() => {
        if (routingMachineRef.current && route.waypoints.length > 1) {
            // Set waypoints
            const newWaypoints = route.waypoints.map(({ lat, lon }) => L.latLng(lat, lon));
            routingMachineRef.current.setWaypoints(newWaypoints);

            // Set color
            routingMachineRef.current.options.lineOptions.styles[0].color = route.color;
        }
    }, [route]);

    useEffect(() => {
        fetchGeoJSON(countryMask);
    }, [countryMask]);

    // Zoom on map
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

    var countryMaskStyle = {
        fillColor: "#a5b1c2",
        fillOpacity: 1,
        color: "#a5b1c2",
    };

    // TODO: Think about better protecting the credentials, i.e. make the call on the server side (--> remove the NEXT_PUBLIC_ prefix after doing)
    return (
        <>
            {/* <Statistic title={"POIs"} value={pois.length} />
            <Statistic title={"Enabled"} value={enabledCount} /> */}

            <MapContainer
                center={homes[0] ?? DEFAULT_CENTER}
                zoom={DEFAULT_ZOOM}
                scrollWheelZoom={true}
                style={{ height: 700, width: "100%" }}
            >
                <Pane name="base" style={{ zIndex: 100 }}>
                    {/* Filename could be usefull
                TODO: Currently not working to due multiple tile layer */}
                    <MapPrint
                        position="topleft"
                        sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                        hideControlContainer={true}
                        title="Export as PNG"
                        exportOnly
                    />

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

                    <RoutingMachine waypoints={route.waypoints} linecolor={route.color} ref={routingMachineRef} />
                </Pane>
                <Pane name="middle" style={{ zIndex: 600 }}>
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
                                key={p.name}
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
                <Pane name="top" style={{ zIndex: 1000 }}>
                    {geoJSON && <GeoJSON data={geoJSON} style={countryMaskStyle} invert={true} key={geojsonName} />}
                </Pane>
            </MapContainer>
        </>
    );
};

export default PoiMap;
