import React, { useState } from "react";
import { Tree } from "antd";
const { TreeNode } = Tree;
import { faHouse, faRoad, faQuestion, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { DecoratedCircle } from "../../utils/decorated-fa-icons";
import { DownOutlined } from "@ant-design/icons";
import Map from "./map";

const Travel = () => {
    const TreeComponent = ({ hierarchy }) => {
        let poiNumber = 1; // TODO: Use some kind of rank property in the JSON struct
        const renderTreeNodes = (data) =>
            data.map((item) => {
                let icon;
                switch (item.type) {
                    case "Home":
                        icon = <DecoratedCircle icon={faHouse} color={item.color} />;
                        break;
                    case "POI":
                        icon = <DecoratedCircle number={poiNumber++} color={item.color} />;
                        break;
                    case "Routing":
                        icon = <DecoratedCircle icon={faRoad} color={item.color} />;
                        break;
                    case "Stage":
                        icon = <DecoratedCircle icon={faMapMarkedAlt} color={item.color} />;
                        break;
                    default:
                        icon = <DecoratedCircle icon={faQuestion} color={item.color} />;
                        break;
                }
                if (item.steps) {
                    return (
                        <TreeNode title={item.name} key={item.key} dataRef={item} icon={icon}>
                            {renderTreeNodes(item.steps)}
                        </TreeNode>
                    );
                }
                return <TreeNode title={item.name} key={item.key} dataRef={item} show icon={icon} {...item} />;
            });

        // TODO: Determine the checked and expaned key dynamically
        return (
            <Tree
                onSelect={onSelect}
                onCheck={onCheck}
                checkable
                defaultCheckedKeys={["0-0"]}
                defaultExpandedKeys={["0-0"]}
                showIcon
                showLine
                switcherIcon={<DownOutlined />}
            >
                {renderTreeNodes([hierarchy])}
            </Tree>
        );
    };

    const onSelect = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
    };
    const onCheck = (checkedKeys, info) => {
        console.log("onCheck", checkedKeys, info);
    };

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
            let color = "#eb3b5a";
            // let color = "#fa8231";
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

    let mnePois = {
        id: 1,
        name: "Montenegro",
        color: "#3867d6",
        type: "Stage",
        useForRouting: false,
        steps: [
            {
                id: 2,
                name: "Grenze HRV -> MNE",
                address: "",
                lat: 42.4869138,
                lon: 18.4352239,
                color: "#a5b1c2",
                type: "Routing",
            },
            {
                id: 3,
                name: "Perast",
                address: "",
                lat: 42.4862681,
                lon: 18.6988592,
                color: "#20bf6b",
                type: "POI",
            },
            {
                id: 4,
                name: "Unterkunft Budva",
                address: "",
                lat: 42.3069694,
                lon: 18.7984001,
                color: "#fed330",
                type: "Home",
                steps: [
                    {
                        id: 5,
                        name: "Tag 1",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                id: 6,
                                name: "Kotor",
                                address: "",
                                lat: 42.4248525,
                                lon: 18.7695775,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                id: 7,
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
                        id: 8,
                        name: "Tag 2",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                id: 9,
                                name: "NP Lovćen",
                                address: "",
                                lat: 42.39992,
                                lon: 18.8375047,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                id: 10,
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
                        id: 11,
                        name: "Tag 3",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                id: 12,
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
                        id: 13,
                        name: "Tag 4",
                        address: "",
                        lat: 42.3069694,
                        lon: 18.7984001,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                id: 21,
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
                id: 14,
                name: "Kloster Ostrog",
                address: "",
                lat: 42.6747602,
                lon: 19.0279901,
                color: "#20bf6b",
                type: "POI",
            },
            {
                id: 15,
                name: "Unterkunft Nikšić",
                address: "",
                lat: 42.806415,
                lon: 18.899258,
                color: "#fed330",
                type: "Home",
                steps: [
                    {
                        id: 16,
                        name: "Tag 5",
                        address: "",
                        lat: 42.806415,
                        lon: 18.899258,
                        color: "#3867d6",
                        type: "Stage",
                        useForRouting: true,
                        steps: [
                            {
                                id: 17,
                                name: "Crno Jezero",
                                address: "",
                                lat: 43.1453521,
                                lon: 19.0856592,
                                color: "#20bf6b",
                                type: "POI",
                            },
                            {
                                id: 18,
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
                id: 19,
                name: "Slano Jezero",
                address: "",
                lat: 42.7570642,
                lon: 18.8214578,
                color: "#20bf6b",
                type: "POI",
            },
            {
                id: 20,
                name: "Grenze MNE -> BIH",
                address: "",
                lat: 42.8580652,
                lon: 18.4562098,
                color: "#a5b1c2",
                type: "Routing",
            },
        ],
    };

    let elternzeitPois = {
        name: "Elternzeit 2023",
        color: "#3867d6",
        type: "Stage",
        useForRouting: false,
        steps: [
            {
                name: "Heimatadresse",
                address: "",
                lat: 52.4180376,
                lon: 9.6970564,
                color: "#eb3b5a",
                type: "Home", // TODO: Type start/finish
            },
            {
                name: "Hercules Denkmal",
                address: "Schlosspark 28, 34131 Kassel, Deutschland",
                lat: 51.3160658,
                lon: 9.3912614,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Landgasthof Felsenkeller",
                address: "Dinkelsbühler Str. 7, 91614 Mönchsroth, Deutschland",
                lat: 49.0250851,
                lon: 10.3585358,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Alissa",
                address: "Pötschnerstraße 9, 80634 München, Deutschland",
                lat: 48.1516244,
                lon: 11.530048,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Bauernhof Höbarten",
                address: "Wohlfahrtsschlag 6, Sankt Anton an der Jessnitz, 3283, Österreich",
                lat: 47.9856841,
                lon: 15.2466038,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Erzberg",
                address: "Erzberg; 8790 Eisenerz, Österreich",
                lat: 47.5179027,
                lon: 14.8525572,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Bled",
                address: "Stagne 34, 4260 Bled, Slowenien",
                lat: 46.3901254,
                lon: 14.1092409,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Höhlen von Postojna",
                address: "Jamska cesta 30, 6230 Postojna, Slowenien",
                lat: 45.7830298,
                lon: 14.2012614,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Predjama Burg",
                address: "Predjama 1, 6230 Predjama, Slowenien",
                lat: 45.8158037,
                lon: 14.1242992,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Piran",
                address: "Ulica Istrskega odreda 50, 6320 Portorož - Portorose, Slowenien",
                lat: 45.5097763,
                lon: 13.6018686,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Unterkunft Pula",
                address: "Ohreggerova ul. 22, 52100 Pula, Kroatien",
                lat: 44.8505162,
                lon: 13.8456501,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Labin",
                address: "",
                lat: 45.1821042,
                lon: 14.2242049,
                color: "#a5b1c2",
                type: "Routing",
            },
            {
                name: "Opatija",
                address: "",
                lat: 45.3395294,
                lon: 14.292083,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Rijeka",
                address: "Krasica 173, Krasica, Primorsko-goranska županija 51224, Kroatien",
                lat: 45.3097258,
                lon: 14.5520716,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Slunje Rastoke",
                address: "",
                lat: 45.1209741,
                lon: 15.5805101,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "NP Plitvicer Seen",
                address: "",
                lat: 44.8653966,
                lon: 15.579437,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft NP Plitvicer Seen",
                address: "Smoljanac 26, 53231, Smoljanac, Kroatien",
                lat: 44.9308172,
                lon: 15.6669543,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Unterkunft Vodice",
                address: "Zatonska ul. 47a, 22211, Vodice, Kroatien",
                lat: 43.7684914,
                lon: 15.7762597,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Ston",
                address: "",
                lat: 42.8372737,
                lon: 17.6945063,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Dubrovnik",
                address: "Šetalište dr. Franja Tuđmana 15, 20207, Srebreno, Kroatien",
                lat: 42.6243342,
                lon: 18.1906837,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Dubrovnik",
                address: "",
                lat: 42.6457359,
                lon: 18.0240074,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Arboretum Trsteno",
                address: "Potok 20, 20233, Trsteno, Kroatien",
                lat: 42.7131577,
                lon: 17.9697927,
                color: "#20bf6b",
                type: "POI",
            },

            {
                name: "Perast",
                address: "",
                lat: 42.4876621,
                lon: 18.6957317,
                color: "#20bf6b",
                type: "POI",
            },
            {
                name: "Unterkunft Budva",
                address: "bb Latinska ulica, Kotor 85317, Montenegro",
                lat: 42.3069694,
                lon: 18.7984001,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Kloster Ostrog, M2FJ+W64, Dabojevići, Montenegro",
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
            },
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
            {
                name: "Unterkunft Mostar",
                address: "",
                lat: 43.2145872,
                lon: 17.7156137,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Unterkunft Wien",
                address: "Am Tabor 12, 1020 Wien, Österreich",
                lat: 48.2247272,
                lon: 16.3847988,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Unterkunft Sächsische Schweiz",
                address: "Zittauer Str. 7, 01877 Schmölln-Putzkau",
                lat: 51.0983278,
                lon: 14.2292317,
                color: "#fed330",
                type: "Home",
            },
            {
                name: "Heimatadresse",
                address: "",
                lat: 52.4180376,
                lon: 9.6970564,
                color: "#a5b1c2",
                type: "Routing",
            },
        ],
    };

    const trips = {
        elternzeit: elternzeitPois,
        mne: mnePois,
    };

    // TODO: Improve the loading once the data is really received from somewhere...
    const [homes, setHomes] = useState(getPlaces(mnePois, "Home"));
    const [pois, setPois] = useState(getPlaces(mnePois, "POI"));
    const [routes, setRoutes] = useState(getRoutes(mnePois));

    function setTrip(name) {
        const trip = trips[name];

        setHomes(getPlaces(trip, "Home"));
        setPois(getPlaces(trip, "POI"));
        setRoutes(getRoutes(trip));
    }

    return (
        <>
            <p>Example Map</p>
            <TreeComponent hierarchy={trips.mne} />
            <Map homes={homes} pois={pois} routes={routes} />
            {Object.keys(trips).map((tripname) => (
                <button
                    onClick={() => {
                        setTrip(tripname);
                    }}
                >
                    {tripname}
                </button>
            ))}
        </>
    );
};

export default Travel;
