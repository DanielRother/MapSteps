import L, { LatLng, latLngBounds, FeatureGroup } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./routing-machine";

import { AwesomeIconToMarker, SvgMarker } from "./MapUtils";
import MapPrint from "./map-print";

const Map = ({ homes, pois, routes }) => {
    const DEFAULT_ZOOM = 10;
    const DEFAULT_CENTER = { lat: 52.3758916, lon: 9.7320104 }; // Hannover

    function ChangeView({ center, markers }) {
        const map = useMap();
        map.setView({ lng: center.lon, lat: center.lat }, DEFAULT_ZOOM);

        let markerBounds = latLngBounds([]);
        markers.forEach((marker) => {
            markerBounds.extend([marker.lat, marker.lon]);
        });
        markerBounds.isValid() && map.fitBounds(markerBounds);

        return null;
    }

    return (
        <>
            <MapContainer
                center={homes[0] ?? DEFAULT_CENTER}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: 750, width: "100%" }}
            >
                {/* Filename could be usefull */}
                <MapPrint
                    position="topleft"
                    sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                    hideControlContainer={true}
                    title="Export as PNG"
                    exportOnly
                />

                <ChangeView center={homes[0] ?? DEFAULT_CENTER} markers={pois} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {routes.map((r) => (
                    <RoutingMachine waypoints={r.waypoints} linecolor={r.color} />
                ))}
                {homes.map((h) => (
                    <Marker
                        key={h.name}
                        position={[h.lat, h.lon]}
                        icon={AwesomeIconToMarker({ iconName: "location-pin-house", color: h.color })}
                    >
                        <Popup>{h.name}</Popup>
                    </Marker>
                ))}
                {pois.map((p, index) => (
                    <Marker
                        key={p.name}
                        position={[p.lat, p.lon]}
                        icon={AwesomeIconToMarker({ iconName: "location-pin-number-" + (index + 1), color: p.color })}
                    >
                        <Popup>{p.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Map;
