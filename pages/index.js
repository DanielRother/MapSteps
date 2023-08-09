import Head from "next/head";

import CountrySelector from "./components/country-selector";
import LanguageSwitcher from "./components/language-switcher";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ScratchmapApp({ locale }) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("app_title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <LanguageSwitcher /> */}
        <CountrySelector />
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

