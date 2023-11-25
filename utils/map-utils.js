import { getContinentCode, getContinentName } from "@brixtol/country-continent";
import countries from "i18n-iso-countries";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "next-i18next";
import { i18n } from "../next-i18next.config.js";
import { latLngBounds } from "leaflet";
import { Polyline } from "react-leaflet";
import "polyline-encoded";

export function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

export function getAllCountriesData() {
    const { t } = useTranslation();
    const locale = t("locale");

    i18n.locales.forEach((l) => {
        countries.registerLocale(require("i18n-iso-countries/langs/" + l + ".json"));
    });

    let allCountriesData = new Map();
    Object.values(countries.getNames(locale)).forEach((c) => {
        const alpha2 = countries.getAlpha2Code(c, locale);
        const alpha3 = countries.getAlpha3Code(c, locale);

        allCountriesData.set(alpha3, {
            countryName: c,
            alpha2: alpha2,
            alpha3: alpha3,
            continentCode: getContinentCode(countries.getAlpha2Code(c, locale)),
            flag: <ReactCountryFlag countryCode={alpha2} />,
        });
    });

    return allCountriesData;
}

export function getPlaces(data, type) {
    if (Object.keys(data).length === 0) {
        return [];
    }
    let places = [];

    // console.log("data.name", data.name);
    if (data.type === type) {
        places.push(data);
    }

    if (data.hasOwnProperty("steps")) {
        data.steps.forEach((step) => {
            if (step.type === type) {
                places.push(step);
            }

            if (step.hasOwnProperty("steps")) {
                step.steps.forEach((child) => {
                    let childrenPlaces = getPlaces(child, type);
                    places = places.concat(childrenPlaces);
                });
            }
        });
    }

    return places;
}

export function flatten(tree, forceRouteHomes) {
    if (Object.keys(tree).length === 0) {
        return [];
    }

    let currentWaypoints = [];
    // console.log("tree", tree);

    // TBD: Is this required? What happens of the root element is no stage?
    // if (tree.enabled && tree.type != "Stage") {
    //     console.log("**** push");
    //     currentWaypoints.push(tree);
    // }

    if (tree.hasOwnProperty("steps")) {
        tree.steps.forEach((step) => {
            if (step.enabled && step.type != "Stage") {
                // console.log("step", step);
                // console.log("**** push");
                currentWaypoints.push({ ...step, rank: currentWaypoints.length });
            } else if (step.type == "Home" && forceRouteHomes) {
                currentWaypoints.push({ ...step, rank: currentWaypoints.length });
            }

            if (step.hasOwnProperty("steps")) {
                let childWaypoints = flatten(step, forceRouteHomes);

                if ((step.type == "Stage" || step.type == "Home") && step.useForRouting && childWaypoints.length > 0) {
                    childWaypoints.unshift(step);
                    childWaypoints.push(step);
                }
                childWaypoints.forEach((c) => {
                    currentWaypoints.push({ ...c, rank: currentWaypoints.length });
                });
                // currentWaypoints = currentWaypoints.concat(childWaypoints);
            }
        });
    }
    console.log("currentWaypoints", currentWaypoints);

    return currentWaypoints;
}

export function getRoutes(data) {
    if (Object.keys(data).length === 0) {
        return [];
    }

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
}

export async function calculateRoute(start, finish) {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
        cache: "no-store",
    };

    const url = `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${finish.lon},${finish.lat}`;
    fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const resultJson = JSON.parse(result);
            console.log("result", resultJson);

            const encoded = resultJson.routes[0].geometry;
            const polyline = L.Polyline.fromEncoded(encoded);
            const route = {
                encode: encoded,
                polyline: polyline,
            };
            console.log(route);

            setPolyline(route);
        })
        .catch((error) => console.log("error", error));
}
