import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import CountrySelector from "./country-selector";

export default function ScratchMapApp() {
    const [selected, setSelected] = useState();

    const { t } = useTranslation();
    const locale = t("locale");

    return (
        <>
            <CountrySelector selected={selected} setSelected={setSelected} />
        </>
    );
}
