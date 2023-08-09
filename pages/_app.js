import { appWithTranslation } from "next-i18next";
import Header from "./components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
