import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const Mapbox = ({ locale }) => {
    const { t } = useTranslation();

    const Travel = dynamic(
        () => import("./components/travel"), // replace '@components/map' with your component's location
        { loading: () => <p>A map is loading</p>, ssr: false }, // This line is important. It's what prevents server-side render
    );
    return <Travel />;
};

export default Mapbox;
