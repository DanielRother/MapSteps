import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faSearch,
    faAmbulance,
    faAnchor,
    faCoffee,
    faChevronDown,
    faCircle,
    faCheck,
    fa5,
    fa9,
    faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

// library.add(faBug, faBugs, faCoffee);

import { AwesomeIconToMarker, SvgMarker } from "./MapUtils";

import RoutingMachine from "./routing-machine";

const Map = () => {
    let mnePois = {
        name: "l",
        homes: [
            {
                name: "Unterkunft Budva",
                address: "",
                lat: 42.3069694,
                lon: 18.7984001,
                color: "#fed330",
            },
            {
                name: "Unterkunft Nikšić",
                address: "",
                lat: 42.806415,
                lon: 18.899258,
                color: "#fed330",
            },
        ],
        pois: [
            {
                name: "Perast",
                address: "",
                lat: 42.4862681,
                lon: 18.6988592,
                color: "#20bf6b",
            },
            {
                name: "Kotor",
                address: "",
                lat: 42.4248525,
                lon: 18.7695775,
                color: "#20bf6b",
            },
            {
                name: "Jazz Beach",
                address: "",
                lat: 42.28394,
                lon: 18.8024847,
                color: "#20bf6b",
            },
            {
                name: "NP Lovćen",
                address: "",
                lat: 42.39992,
                lon: 18.8375047,
                color: "#20bf6b",
            },
            {
                name: "Cetinje",
                address: "",
                lat: 42.3880067,
                lon: 18.9255706,
                color: "#20bf6b",
            },
            {
                name: "Budva",
                address: "",
                lat: 42.2778986,
                lon: 18.8376308,
                color: "#20bf6b",
            },
            {
                name: "NP Skutarisee",
                address: "",
                lat: 42.2465056,
                lon: 19.0920378,
                color: "#20bf6b",
            },
            {
                name: "Kloster Ostrog",
                address: "",
                lat: 42.6747602,
                lon: 19.0279901,
                color: "#20bf6b",
            },
            {
                name: "Crno Jezero",
                address: "",
                lat: 43.1453521,
                lon: 19.0856592,
                color: "#20bf6b",
            },
            {
                name: "Đurđevića-Tara-Brücke",
                address: "",
                lat: 43.150201,
                lon: 19.2900385,
                color: "#20bf6b",
            },
            {
                name: "Slano Jezero",
                address: "",
                lat: 42.7570642,
                lon: 18.8214578,
                color: "#20bf6b",
            },
        ],
    };
    let homes = mnePois.homes;
    let pois = mnePois.pois;

    let routeLinecolor = "#eb3b5a";
    // console.log(homes);

    // let waypoints = [
    //     {
    //         latitude: homes[0].lat,
    //         longitude: homes[0].lon,
    //     },
    //     {
    //         latitude: pois[0].lat,
    //         longitude: pois[0].lon,
    //     },
    // ];
    let waypoints = [homes[0], pois[1]];
    // console.log("Waypoints: " + waypoints);

    return (
        <>
            <FontAwesomeIcon icon={faAmbulance} style={{ color: "#20bf6b" }} />
            <div style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faCircle} />
                <span style={{ position: "absolute" }}>2</span>
            </div>
            <FontAwesomeIcon icon={faCoffee} />
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} />
                <FontAwesomeIcon icon={fa9} transform="shrink-7" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-4 up-2" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-7 up-2 left-3" inverse />
                <FontAwesomeIcon icon={fa9} transform="shrink-7 up-2 right-3" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-7 up-2" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>

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

                <RoutingMachine waypoints={waypoints} linecolor={routeLinecolor} />

                {homes.map((h) => (
                    <Marker
                        key={h.name}
                        position={[h.lat, h.lon]}
                        icon={AwesomeIconToMarker({ iconName: "location-pin-house", color: h.color })}
                    >
                        <Popup>{h.name}</Popup>
                    </Marker>
                ))}
                {pois.map((h, index) => (
                    <Marker
                        key={h.name}
                        position={[h.lat, h.lon]}
                        icon={AwesomeIconToMarker({ iconName: "location-pin-number-" + (index + 1), color: h.color })}
                    >
                        <Popup>{h.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Map;
