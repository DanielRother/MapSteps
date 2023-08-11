import { Button, Select, Space, Tag } from "antd";
import { useTranslation } from "next-i18next";
import { groupBy, getAllCountriesData } from "../../utils/utils.js";

const { Option, OptGroup } = Select;

export default function CountrySelector({ selected, setSelected }) {
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
