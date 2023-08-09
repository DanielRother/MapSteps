import { Button, Select, Space, Tag } from "antd";
import { getContinentCode, getContinentName } from "@brixtol/country-continent";
import countries from "i18n-iso-countries";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "next-i18next";
import { i18n } from "../../next-i18next.config.js";
import { groupBy } from "../../utils/utils.js";

const { Option, OptGroup } = Select;

export default function CountrySelector() {
    const [selected, setSelected] = useState();

    const { t } = useTranslation();
    const locale = t("locale");

    i18n.locales.forEach((l) => {
        countries.registerLocale(require("i18n-iso-countries/langs/" + l + ".json"));
    });

    let c = countries.getNames(locale);
    let countriesByContinents = groupBy(Object.values(countries.getNames(locale)), (c) => {
        let cc = getContinentCode(countries.getAlpha2Code(c, locale));
        return cc;
    });

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setSelected(value);
    };

    const clearSelected = () => {
        setSelected([]);
    };

    const flagTagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        const countryCode = countries.getAlpha2Code(label, locale);
        var flag = <ReactCountryFlag countryCode={countryCode} />;
        return (
            <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} icon={flag}>
                {label}
            </Tag>
        );
    };

    const addCountryOptionsForContinent = (name, countriesForContinent) => {
        return (
            <>
                <OptGroup label={name} key={name}>
                    {countriesForContinent.map((v) => {
                        const alpha2 = countries.getAlpha2Code(v, locale).toLocaleLowerCase();
                        const alpha3 = countries.getAlpha3Code(v, locale).toLocaleLowerCase();
                        const flag = <ReactCountryFlag countryCode={alpha2} />;

                        return (
                            <>
                                <Option value={alpha3} label={v} key={alpha3}>
                                    <Space>
                                        <span role="img" aria-label={alpha3}>
                                            {flag}
                                        </span>
                                        {v}
                                    </Space>
                                </Option>
                            </>
                        );
                    })}
                </OptGroup>
            </>
        );
    };

    return (
        <div>
            <Select
                mode="multiple"
                showSearch
                placeholder={t("Select the countries you've visited yet")}
                style={{
                    width: "100%",
                }}
                onChange={onChange}
                tagRender={flagTagRender}
                optionLabelProp="label"
                optionFilterProp="label"
                value={selected}
            >
                {addCountryOptionsForContinent(t("Asia"), countriesByContinents.get("AS"))}
                {addCountryOptionsForContinent(t("Africa"), countriesByContinents.get("AF"))}
                {addCountryOptionsForContinent(t("Europe"), countriesByContinents.get("EU"))}
                {addCountryOptionsForContinent(t("Oceania"), countriesByContinents.get("OC"))}
                {addCountryOptionsForContinent(t("North America"), countriesByContinents.get("NA"))}
                {addCountryOptionsForContinent(t("South America"), countriesByContinents.get("SA"))}
                {addCountryOptionsForContinent(t("Antarctica"), countriesByContinents.get("AN"))}
            </Select>
            <Button onClick={clearSelected}>{t("Clear selected countries")}</Button>
        </div>
    );
}
