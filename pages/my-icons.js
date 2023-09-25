import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faHouse, faTree, fa1, fa2, faLocationPin } from "@fortawesome/free-solid-svg-icons";

import DecoratedLocationPin from "./decorated-location-pin";

export default function MyIcons() {
    var icons = [];
    for (var n = 0; n < 100; ++n) icons.push(<DecoratedLocationPin number={n} />);
    return (
        <>
            <div>{icons}</div>
            <DecoratedLocationPin icon={faHouse} />
            <DecoratedLocationPin icon={faTree} />

            <FontAwesomeIcon icon={faLocationPin} />

            {/* <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faLocationPin} size="3x" />
                <FontAwesomeIcon icon={fa2} transform="up-7 right-3" inverse />
                <FontAwesomeIcon icon={fa2} transform="up-7 right-14" inverse />
            </span>
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faLocationPin} size="2x" />
                <FontAwesomeIcon icon={fa2} transform="up-7 right-3" inverse />
                <FontAwesomeIcon icon={fa2} transform="up-7 right-14" inverse />
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa2} transform="shrink-7 up-3 left-3" inverse />
                <FontAwesomeIcon icon={fa2} transform="shrink-7 up-3 right-3" inverse />
            </span> */}
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faLocationPin} transform="grow-25" />
                <FontAwesomeIcon icon={fa2} transform="up-5 left-5" inverse />
                <FontAwesomeIcon icon={fa2} transform="up-5 right-5" inverse />
            </span>
        </>
    );
}
