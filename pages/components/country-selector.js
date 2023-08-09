import { Button, Select, Space, Tag } from "antd";
import countries from "i18n-iso-countries";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const { Option, OptGroup } = Select;

export default function CountrySelector() {
  const [selected, setSelected] = useState();

  const SUPPORTED_LOCALES = ["de", "en"];
  const USED_LOCALE = "de";
  SUPPORTED_LOCALES.forEach((l) => {
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
    const countryCode = countries.getAlpha2Code(label, USED_LOCALE);
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
        placeholder="Wähle ein Land aus JSX"
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
          {Object.values(countries.getNames(USED_LOCALE)).map((v) => {
            const alpha2 = countries
              .getAlpha2Code(v, USED_LOCALE)
              .toLocaleLowerCase();
            const alpha3 = countries
              .getAlpha3Code(v, USED_LOCALE)
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
      <Button onClick={clearSelected}>Clear Selected</Button>
    </div>
  );
}
