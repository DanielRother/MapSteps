import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import CountrySelector from "./country-selector";
import CountryStatistic from "./country-statistic";
import ScratchMapImage from "./scratch-map-image";

const ScratchMapApp = () => {
    const [selected, setSelected] = useState([]);

    const { t } = useTranslation();

    return (
        <>
            <CountrySelector selected={selected} setSelected={setSelected} />
            <CountryStatistic selected={selected} />
            <ScratchMapImage selected={selected} />
        </>
    );
};

export default ScratchMapApp;
