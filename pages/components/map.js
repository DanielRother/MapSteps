import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { AwesomeIconToMarker, SvgMarker } from "./MapUtils";

import RoutingMachine from "./routing-machine";

const Map = ({ homes, pois, routes }) => {
    let routeLinecolor = "#eb3b5a";

    // TODO: Calc center and zoom

    return (
        <>
            <MapContainer
                center={[42.3880067, 18.9255706]}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: 750, width: "100%" }}
            >
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
