import { useRouter } from "next/router";
import { Radio } from "antd";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

export default function LanguageSwitcher() {
    const router = useRouter();
    const { t } = useTranslation();
    const locale = t("locale");

    const [size, setSize] = useState(locale);

    return (
        <div>
            <Radio.Group
                value={size}
                onChange={(e) => {
                    setSize(e.target.value);

                    router.push(
                        {
                            pathname: router.pathname,
                            query: router.query,
                        },
                        null,
                        { locale: e.target.value },
                    );
                }}
            >
                <Radio.Button value="de">Deutsch</Radio.Button>
                <Radio.Button value="en">English</Radio.Button>
            </Radio.Group>
        </div>
    );
}
