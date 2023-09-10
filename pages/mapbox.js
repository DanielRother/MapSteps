import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

export default function Mapbox({ locale }) {
    const { t } = useTranslation();

    // var map = L.map("map").setView([51.505, -0.09], 13);
    // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     maxZoom: 19,
    //     attribution: "© OpenStreetMap",
    // }).addTo(map);

    const Map = dynamic(
        () => import("./components/map"), // replace '@components/map' with your component's location
        { loading: () => <p>A map is loading</p>, ssr: false }, // This line is important. It's what prevents server-side render
    );
    return <Map />;
}
