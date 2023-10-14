import dynamic from "next/dynamic";
import Map from "./map";

// const Map = dynamic(
//     () => import("./components/map"), // replace '@components/map' with your component's location
//     { loading: () => <p>A map is loading</p>, ssr: false }, // This line is important. It's what prevents server-side render
// );

const Travel = () => {
    let mne2 = {
        name: "Montenegro",
        address: "",
        lat: 42.3069694,
        lon: 18.7984001,
        color: "#3867d6",
        type: "Stage",
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

    let waypoints = [homes[0], pois[1]];
    let waypoints2 = [homes[0], pois[6]];

    let routes = [
        {
            waypoints: [homes[0], pois[1]],
            color: "#eb3b5a",
        },
        {
            waypoints: [homes[0], pois[6]],
            color: "#fa8231",
        },
    ];
    // console.log("Waypoints: " + waypoints);

    return (
        <>
            <p>Example Map</p>
            <Map homes={homes} pois={pois} routes={routes} />
        </>
    );
};

export default Travel;
