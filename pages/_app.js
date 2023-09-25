import { appWithTranslation } from "next-i18next";
import Header from "./components/header";
import "../styles/globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

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
