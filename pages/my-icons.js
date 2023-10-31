import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    fa1,
    fa2,
    fa5,
    fa9,
    faAmbulance,
    faCircle,
    faCoffee,
    faHouse,
    faLocationPin,
    faTree,
} from "@fortawesome/free-solid-svg-icons";

import { DecoratedLocationPin } from "../utils/decorated-fa-icons";

export default function MyIcons() {
    var icons = [];
    for (var n = 0; n < 100; ++n) icons.push(<DecoratedLocationPin number={n} />);
    return (
        <>
            <FontAwesomeIcon icon={faAmbulance} style={{ color: "#20bf6b" }} />
            <div style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faCircle} />
                <span style={{ position: "absolute" }}>2</span>
            </div>
            <FontAwesomeIcon icon={faCoffee} />
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} />
                <FontAwesomeIcon icon={fa9} transform="shrink-7" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-4 up-2" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-7 up-2 left-3" inverse />
                <FontAwesomeIcon icon={fa9} transform="shrink-7 up-2 right-3" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>
            <span className="fa-layers fa-fw fa-lg">
                <FontAwesomeIcon icon={faLocationPin} size="xl" />
                <FontAwesomeIcon icon={fa5} transform="shrink-7 up-2" inverse />
                {/* <i class="fa-inverse fa-solid fa-times" data-fa-transform="shrink-6"></i> */}
            </span>

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
