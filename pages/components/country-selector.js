import { Button, Select, Space, Tag } from "antd";
import countries from "i18n-iso-countries";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "next-i18next";
import { i18n } from "../../next-i18next.config.js";

const { Option, OptGroup } = Select;

export default function CountrySelector() {
  const [selected, setSelected] = useState();

  const { t } = useTranslation();

  const locale = t("locale");
  i18n.locales.forEach((l) => {
    countries.registerLocale(
      require("i18n-iso-countries/langs/" + l + ".json"),
    );
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
      <Tag
        // color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        // style={{
        //   marginRight: 3,
        // }}
        icon={flag}
      >
        {label}
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
        <OptGroup label="foo" key="foo">
          {Object.values(countries.getNames(locale)).map((v) => {
            const alpha2 = countries
              .getAlpha2Code(v, locale)
              .toLocaleLowerCase();
            const alpha3 = countries
              .getAlpha3Code(v, locale)
              .toLocaleLowerCase();
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
      </Select>
      <Button onClick={clearSelected}>{t("Clear selected countries")}</Button>
    </div>
  );
}

export const getServerSideProps = async ({ locales }) => {
  console.log("locales: " + locales); // You should get an array of all locales
};
