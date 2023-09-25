export function SvgMarker({ color, borderColor = "#000000" }) {
    const svgIcon = L.divIcon({
        html: `
        <svg
            width="99"
            height="122"
            fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <defs>
          <linearGradient id="b_${color}">
           <stop stop-color="${borderColor}" offset="0"/>
          </linearGradient>
          <linearGradient id="a_${color}">
           <stop stop-color="${color}" offset="0"/>
          </linearGradient>
          <linearGradient y2="-0.004651" x2="0.498125" y1="0.971494" x1="0.498125" id="c_${color}" xlink:href="#a_${color}"/>
          <linearGradient y2="-0.004651" x2="0.415917" y1="0.490437" x1="0.415917" id="d_${color}" xlink:href="#b_${color}"/>
         </defs>
         <g>
          <title>Layer 1</title>
          <rect id="svg_1" fill="#fff" width="12.625" height="14.5" x="411.279" y="508.575"/>
          <path stroke="url(#d_${color})" id="svg_2_${color}" stroke-linecap="round" stroke-width="1.1" fill="url(#c_${color})" d="m14.095833,1.55c-6.846875,0 -12.545833,5.691 -12.545833,11.866c0,2.778 1.629167,6.308 2.80625,8.746l9.69375,17.872l9.647916,-17.872c1.177083,-2.438 2.852083,-5.791 2.852083,-8.746c0,-6.175 -5.607291,-11.866 -12.454166,-11.866zm0,7.155c2.691667,0.017 4.873958,2.122 4.873958,4.71s-2.182292,4.663 -4.873958,4.679c-2.691667,-0.017 -4.873958,-2.09 -4.873958,-4.679c0,-2.588 2.182292,-4.693 4.873958,-4.71z"/>
          <path id="svg_3_${color}" fill="none" stroke-opacity="0.122" stroke-linecap="round" stroke-width="1.1" stroke="#fff" d="m347.488007,453.719c-5.944,0 -10.938,5.219 -10.938,10.75c0,2.359 1.443,5.832 2.563,8.25l0.031,0.031l8.313,15.969l8.25,-15.969l0.031,-0.031c1.135,-2.448 2.625,-5.706 2.625,-8.25c0,-5.538 -4.931,-10.75 -10.875,-10.75zm0,4.969c3.168,0.021 5.781,2.601 5.781,5.781c0,3.18 -2.613,5.761 -5.781,5.781c-3.168,-0.02 -5.75,-2.61 -5.75,-5.781c0,-3.172 2.582,-5.761 5.75,-5.781z"/>
         </g>
        </svg>`,
        className: "svg-icon",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
    });

    return svgIcon;
}

export function AwesomeIconToMarker({ iconName, color }) {
    // Values manually copied from to corresponding font awesome svg files
    const icons = {
        "location-pin":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>',
        "location-dot":
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>',
        "location-pin-9":
            '<span class="fa-layers fa-fw fa-lg">\
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"></path></svg>\
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin: 0.3125em 0.5em 0px;"><g transform="translate(160 256)"><g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)"><path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path></g></g></svg>\
            </span>',
        "location-pin-9b":
            '<span class="fa-layers fa-fw fa-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"/></svg>',
        "location-pin-7":
            '<span class="fa-layers fa-fw">\
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                    <g transform="translate(192 256)">\
                    <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                    </g>\
                    </g>\
                </svg>\
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                    <g transform="translate(160 256)">\
                    <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                    </g>\
                    </g>\
                </svg>\
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                    <g transform="translate(160 256)">\
                    <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                    </g>\
                    </g>\
                </svg>\
               </span>',
    };

    var iconSettings = {
        mapIconUrl: icons[iconName],
    };

    // icon normal state
    var divIcon = L.divIcon({
        className: "leaflet-data-marker",
        html: L.Util.template(iconSettings.mapIconUrl, iconSettings)
            .replace("#", "%23")
            .replace("svg", `svg id="${iconName}_${color}}"`)
            .replace("path", `path fill="${color}"`),
        iconAnchor: [12, 32],
        iconSize: [25, 30],
        popupAnchor: [0, -28],
    });

    return divIcon;
}
