var osmtogeojson = require("osmtogeojson");
const fs = require("fs");
const countries = require("i18n-iso-countries");

async function downloadGeoJson(iso3166_1_alpha3) {
    console.log("Start download");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = `data=%5Bout%3Ajson%5D%3B%0Arelation%5B%22boundary%22%3D%22administrative%22%5D%5B%22admin_level%22%3D%222%22%5D%5B%22ISO3166-1%3Aalpha3%22%3D%22${iso3166_1_alpha3}%22%5D%3B%0Aout+geom%3B`;

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const response = await fetch("https://overpass-api.de/api/interpreter", requestOptions);
    const resultOsm = await response.json();
    // console.log("overpass osm", result);

    const directoryOsm = "download/osm";
    fs.mkdirSync(directoryOsm, { recursive: true });
    await fs.writeFileSync(`${directoryOsm}/${iso3166_1_alpha3}.json`, JSON.stringify(resultOsm));

    const resultGeo = osmtogeojson(resultOsm);
    // console.log("overpass geojson", resultGeojson);

    const directoryGeo = "download/geojson";
    fs.mkdirSync(directoryGeo, { recursive: true });
    await fs.writeFileSync(`${directoryGeo}/${iso3166_1_alpha3}.geojson`, JSON.stringify(resultGeo));
}

function printAll() {
    const locale = "de";
    const countryNames = countries.getNames(locale);

    Object.values(countryNames).forEach(async (c, idx) => {
        const alpha3 = countries.getAlpha3Code(c, locale);
        console.log(alpha3);
    });
}

async function downloadAll() {
    const locale = "de";
    const countryNames = countries.getNames(locale);

    Object.values(countryNames).forEach(async (c, idx) => {
        const alpha3 = countries.getAlpha3Code(c, locale);

        try {
            await downloadGeoJson(alpha3);
            console.log(`Data downloaded for entry: ${alpha3}`);
        } catch (error) {
            console.error(`Error downloading data for entry: ${c} (${alpha3})`);
        }
    });

    console.log("All downloads completed");
}

console.log("Download GeoJSONs");

var args = process.argv.slice(2);
console.log(args[0]);

downloadGeoJson(args[0]);
// printAll();
// downloadAll();
