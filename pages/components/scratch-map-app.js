import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import CountrySelector from "./country-selector";
import CountryStatistic from "./country-statistic";

export default function ScratchMapApp() {
    const [selected, setSelected] = useState();

    const { t } = useTranslation();

    return (
        <>
            <CountrySelector selected={selected} setSelected={setSelected} />
            <CountryStatistic selected={selected} />
        </>
    );
}
