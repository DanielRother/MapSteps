import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ waypoints, linecolor }) => {
    const instance = L.Routing.control({
        waypoints: waypoints.map(({ lat, lon }) => L.latLng(lat, lon)),
        draggableWaypoints: false,
        // router: new L.Routing.Google(),
        lineOptions: {
            styles: [
                {
                    color: linecolor,
                    // opacity: 0.6,
                    weight: 4,
                },
            ],
        },
        createMarker: function () {
            return null;
        },
        show: false,
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
