import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function ExampleFlagComponent() {
  return (
    <div>
      <ReactCountryFlag countryCode="US" />

      <ReactCountryFlag
        className="emojiFlag"
        countryCode="ME"
        style={{
          fontSize: "2em",
          lineHeight: "2em",
        }}
        aria-label="United States"
      />

      <ReactCountryFlag countryCode="ME" svg />

      <ReactCountryFlag
        countryCode="US"
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
        title="US"
      />

      <ReactCountryFlag
        countryCode="US"
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="US"
      />
    </div>
  );
}
