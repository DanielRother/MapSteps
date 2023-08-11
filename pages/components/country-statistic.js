import React from "react";
import { Col, Row, Statistic } from "antd";
import { useTranslation } from "next-i18next";
import { groupBy, getAllCountriesData } from "../../utils/utils.js";

export default function CountryStatistic({ selected }) {
    const { t } = useTranslation();
    const allCountriesData = getAllCountriesData();
    const countriesByContinents = groupBy(allCountriesData, (c) => {
        return c.continentCode;
    });

    let continentStatistic = new Map();
    countriesByContinents.forEach((_, key) => {
        continentStatistic.set(key, 0);
    });
    selected.forEach((value) => {
        const cc = allCountriesData.get(value).continentCode;
        continentStatistic.set(cc, continentStatistic.get(cc) + 1);
    });

    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title={t("Visited countries")}
                        value={selected.length}
                        suffix={"/ " + allCountriesData.size}
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={3}>
                    <Statistic
                        title={t("Asia")}
                        value={continentStatistic.get("AS")}
                        suffix={"/ " + countriesByContinents.get("AS").length}
                    />
                </Col>
                <Col span={3}>
                    {" "}
                    <Statistic
                        title={t("Africa")}
                        value={continentStatistic.get("AF")}
                        suffix={"/ " + countriesByContinents.get("AF").length}
                    />
                </Col>
                <Col span={3}>
                    <Statistic
                        title={t("Europe")}
                        value={continentStatistic.get("EU")}
                        suffix={"/ " + countriesByContinents.get("EU").length}
                    />{" "}
                </Col>
                <Col span={3}>
                    <Statistic
                        title={t("Oceania")}
                        value={continentStatistic.get("OC")}
                        suffix={"/ " + countriesByContinents.get("OC").length}
                    />{" "}
                </Col>
                <Col span={3}>
                    <Statistic
                        title={t("North America")}
                        value={continentStatistic.get("NA")}
                        suffix={"/ " + countriesByContinents.get("NA").length}
                    />{" "}
                </Col>
                <Col span={3}>
                    <Statistic
                        title={t("South America")}
                        value={continentStatistic.get("SA")}
                        suffix={"/ " + countriesByContinents.get("SA").length}
                    />{" "}
                </Col>
                <Col span={3}>
                    <Statistic
                        title={t("Antarctica")}
                        value={continentStatistic.get("AN")}
                        suffix={"/ " + countriesByContinents.get("AN").length}
                    />
                </Col>
            </Row>
        </>
    );
}
