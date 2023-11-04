import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScratchMapApp from "../components/scratch/scratch-map-app";

export default function Main({ locale }) {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t("app_title")}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ScratchMapApp />
            </main>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            locale,
        },
    };
};
