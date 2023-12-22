import { Button, Select, Space, Tag, Upload } from "antd";
import { useTranslation } from "next-i18next";

import { getAllCountriesData, groupBy } from "../../utils/map-utils.js";

const { Option, OptGroup } = Select;

export default function CountrySelector({ selected, setSelected, placeholder }) {
    const { t } = useTranslation();

    const allCountriesData = getAllCountriesData();
    const countriesByContinents = groupBy(allCountriesData, (c) => {
        return c.continentCode;
    });

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setSelected(value);
    };

    const clearSelected = () => {
        setSelected([]);
    };
    const saveSelected = () => {
        const json = JSON.stringify({ countries: selected }, null, 4);
        var blob = new Blob([json], { type: "text/json;charset=utf-8" });
        var FileSaver = require("file-saver");
        FileSaver.saveAs(blob, "countries.json");
    };
    const loadSelected = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelected(JSON.parse(e.target.result).countries);
        };
        reader.readAsText(file);

        // Prevent upload
        return false;
    };

    const addCountryOptionsForContinent = (name, countriesForContinent) => {
        return (
            <>
                <OptGroup label={name} key={name}>
                    {countriesForContinent.map((c) => {
                        return (
                            <>
                                <Option value={c.alpha3} label={c.countryName} key={c.alpha3}>
                                    <Space>
                                        <span role="img" aria-label={c.alpha3}>
                                            {c.flag}
                                        </span>
                                        {c.countryName}
                                    </Space>
                                </Option>
                            </>
                        );
                    })}
                </OptGroup>
            </>
        );
    };

    const flagTagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        const countryData = allCountriesData.get(value);

        return (
            <Tag
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                icon={countryData.flag}
                key={countryData.countryCode}
            >
                {countryData.countryName}
            </Tag>
        );
    };
    return (
        <div>
            <Select
                mode="multiple"
                showSearch
                placeholder={placeholder ?? t("Select the countries you've visited yet")}
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
            <Button onClick={clearSelected}>{t("Clear")}</Button>
            <Button onClick={saveSelected}>{t("Save")}</Button>
            <Upload accept=".json" showUploadList={false} beforeUpload={loadSelected}>
                <Button>
                    {/* <Icon type="upload" /> TODO: Fix me */}
                    {t("Load")}
                </Button>
            </Upload>
        </div>
    );
}
