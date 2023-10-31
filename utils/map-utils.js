import { getContinentCode, getContinentName } from "@brixtol/country-continent";
import countries from "i18n-iso-countries";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "next-i18next";
import { i18n } from "../next-i18next.config.js";

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
