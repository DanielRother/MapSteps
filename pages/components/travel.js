import dynamic from "next/dynamic";
import React, { useState } from "react";

import Map from "./map";

const Travel = () => {
    const getPlaces = (data, type) => {
        // console.log(data);
        // console.log("Get places of type " + type + " for " + data.name);
        let places = [];

        if (data.type === type) {
            places.push(data);
        }

        data.steps.forEach((step) => {
            // console.log(step.name);
            if (step.type === type) {
                places.push(step);
            }

            if (step.hasOwnProperty("steps")) {
                // console.log("check children");
                // console.log(step.hasOwnProperty("steps"));
                // console.log(step.steps);

                step.steps.forEach((child) => {
                    let childrenPlaces = getPlaces(child, type);
                    places = places.concat(childrenPlaces);
                });
            }
        });

        return places;
    };

    const getRoutes = (data) => {
        let stages = getPlaces(data, "Stage");

        let routes = [];
        stages.forEach((stage) => {
            let waypoints = [];
            let color = "#fa8231";
            stage.steps.forEach((step) => {
                waypoints.push(step);
            });

            if (stage.useForRouting) {
                color = "#eb3b5a";
                waypoints.unshift(stage);
                waypoints.push(stage);
            }

            let route = {
                waypoints: waypoints,
                color: color,
            };

            routes.push(route);
        });

        return routes;
    };

    let newMnePois = {
        name: "Montenegro",
        color: "#3867d6",
        type: "Stage",
        useForRouting: false,
        steps: [
            {
                name: "Grenze HRV -> MNE",
                address: "",
                lat: 42.4869138,
                lon: 18.4352239,
                color: "#a5b1c2",
                type: "Routing",
            },
            {
                name: "Perast",
                address: "",
                lat: 42.4862681,
                lon: 18.6988592,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Budva",
                address: "",
                lat: 42.3069694,
                lon: 18.7984001,
                color: "#fed330",
                type: "Home",
                steps: [
                    {
                        name: "Tag 1",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                name: "Kotor",
                                address: "",
                                lat: 42.4248525,
                                lon: 18.7695775,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                name: "Jazz Beach",
                                address: "",
                                lat: 42.28394,
                                lon: 18.8024847,
                                color: "#20bf6b",
                                type: "POI",
                            },
                        ],
                    },
                    {
                        name: "Tag 2",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                name: "NP Lovćen",
                                address: "",
                                lat: 42.39992,
                                lon: 18.8375047,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                name: "Cetinje",
                                address: "",
                                lat: 42.3880067,
                                lon: 18.9255706,
                                color: "#20bf6b",
                                type: "POI",
                            },
                        ],
                    },
                    {
                        name: "Tag 3",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                name: "Budva",
                                address: "",
                                lat: 42.2778986,
                                lon: 18.8376308,
                                color: "#20bf6b",
                                type: "POI",
                            },
                        ],
                    },
                    {
                        name: "Tag 4",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                name: "NP Skutarisee",
                                address: "",
                                lat: 42.2465056,
                                lon: 19.0920378,
                                color: "#20bf6b",
                                type: "POI",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Kloster Ostrog",
                address: "",
                lat: 42.6747602,
                lon: 19.0279901,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Nikšić",
                address: "",
                lat: 42.806415,
                lon: 18.899258,
                color: "#fed330",
                type: "Home",
                steps: [
                    {
                        name: "Tag 5",
                        address: "",
                        lat: 42.806415,
                        lon: 18.899258,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                name: "Crno Jezero",
                                address: "",
                                lat: 43.1453521,
                                lon: 19.0856592,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                name: "Đurđevića-Tara-Brücke",
                                address: "",
                                lat: 43.150201,
                                lon: 19.2900385,
                                color: "#20bf6b",
                                type: "POI",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Slano Jezero",
                address: "",
                lat: 42.7570642,
                lon: 18.8214578,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Grenze MNE -> BIH",
                address: "",
                lat: 42.8580652,
                lon: 18.4562098,
                color: "#a5b1c2",
                type: "Routing",
            },
        ],
    };

    // TODO: Improve the loading once the data is really received from somewhere...
    const [homes, setHomes] = useState(getPlaces(newMnePois, "Home"));
    const [pois, setPois] = useState(getPlaces(newMnePois, "POI"));
    const [routes, setRoutes] = useState(getRoutes(newMnePois));

    let oldMnePois = {
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
    let oldHomes = oldMnePois.homes;
    let oldPois = oldMnePois.pois;
    // console.log(oldPois);

    return (
        <>
            <p>Example Map</p>
            <Map homes={homes} pois={pois} routes={routes} />
        </>
    );
};

export default Travel;
