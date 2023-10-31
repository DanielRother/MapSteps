import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    fa0,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    fa9,
    faCircle,
    faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const getFaDigitIconName = (digit) => {
    switch (digit) {
        case 0:
            return fa0;
        case 1:
            return fa1;
        case 2:
            return fa2;
        case 3:
            return fa3;
        case 4:
            return fa4;
        case 5:
            return fa5;
        case 6:
            return fa6;
        case 7:
            return fa7;
        case 8:
            return fa8;
        case 9:
            return fa9;
    }
};

const getDigitsIconNames = (number) => {
    const singleDigit = number % 10;
    const tensDigit = Math.floor(number / 10);

    return {
        tens: getFaDigitIconName(tensDigit),
        single: getFaDigitIconName(singleDigit),
    };
};

export function DecoratedLocationPin({ icon, number }) {
    const createNumberedDecoration = (number) => {
        const digitsIconNames = getDigitsIconNames(number);

        return (
            <>
                <FontAwesomeIcon icon={digitsIconNames.tens} transform="up-5 left-5" inverse />
                <FontAwesomeIcon icon={digitsIconNames.single} transform="up-5 right-5" inverse />
            </>
        );
    };

    const createIconDecoration = (icon) => {
        return (
            <>
                <FontAwesomeIcon icon={icon} transform="up-5" inverse />
            </>
        );
    };

    const id = "location_pin_" + (number != null ? "number_" + number : icon.iconName);

    return (
        <div id={id}>
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faLocationPin} transform="grow-25" />
                {number != null ? createNumberedDecoration(number) : createIconDecoration(icon)}
            </span>
        </div>
    );
}

export function DecoratedCircle({ icon, number, color }) {
    const createNumberedDecoration = (number) => {
        const digitsIconNames = getDigitsIconNames(number);

        return (
            <>
                <FontAwesomeIcon icon={digitsIconNames.tens} transform="left-3 shrink-7" inverse />
                <FontAwesomeIcon icon={digitsIconNames.single} transform="right-3 shrink-7" inverse />
            </>
        );
    };

    const createIconDecoration = (icon) => {
        return (
            <>
                <FontAwesomeIcon icon={icon} transform="shrink-7" inverse />
            </>
        );
    };

    const id = "circle_" + (number ? "number_" + number : icon.iconName);

    return (
        <div id={id}>
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color={color ? color : "#000000"} />
                {number ? createNumberedDecoration(number) : createIconDecoration(icon)}
            </span>
        </div>
    );
}
