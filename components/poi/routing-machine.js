import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// TBD: Maybe call OSRM directly and store the returned polyline, e.g. https://router.project-osrm.org/route/v1/driving/9.6947658,52.4180375;9.3912614,51.3160658

const createRoutineMachineLayer = ({ waypoints, linecolor }) => {
    const instance = L.Routing.control({
        waypoints: waypoints.map(({ lat, lon }) => L.latLng(lat, lon)),
        addWaypoints: false, // Can new waypoints be added by the use
        draggableWaypoints: false, // Can waypoints be dragged in the map
        fitSelectedRoutes: false, // prevents zoom on the added route
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

// control.getRouter().options.urlParameters.vehicle = 'foot'; // https://gis.stackexchange.com/questions/193235/leaflet-routing-machine-how-to-dinamically-change-router-settings

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
