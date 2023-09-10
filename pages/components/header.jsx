import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
   integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
   crossorigin=""/>
{/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
   integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
   crossorigin=""></script>
      <div>
        <Link href="/">
          <h2>
            {/* We simply give t() our translation key, and
                it renders its value in the active locale. */}
            {t("app_title")}
          </h2>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
