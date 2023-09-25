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
        "location-pin-number-0":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-1":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-2":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-3":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-4":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-5":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-6":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-7":
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
        "location-pin-number-8":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-9":
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
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-10":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-11":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-12":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-13":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-14":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-15":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-16":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-17":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
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
        "location-pin-number-18":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-19":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:-0.0625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-20":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-21":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-22":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-23":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-24":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-25":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-26":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-27":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-28":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-29":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-30":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-31":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-32":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-33":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-34":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-35":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-36":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-37":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-38":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-39":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-40":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-41":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-42":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-43":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-44":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-45":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-46":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-47":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
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
        "location-pin-number-48":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-49":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.0625em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-50":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-51":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-52":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-53":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-54":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-55":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-56":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-57":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-58":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-59":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-60":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-61":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-62":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-63":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-64":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-65":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-66":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-67":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-68":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-69":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-70":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-71":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-72":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-73":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-74":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-75":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-76":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-77":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-78":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-79":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="7" class="svg-inline--fa fa-7 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-80":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-81":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-82":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-83":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-84":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-85":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-86":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-87":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-88":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-89":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-90":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="0" class="svg-inline--fa fa-0 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-91":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="1" class="svg-inline--fa fa-1 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(128 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" transform="translate(-128 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-92":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="2" class="svg-inline--fa fa-2 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-93":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="3" class="svg-inline--fa fa-3 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-94":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="4" class="svg-inline--fa fa-4 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.6875em 0.1875em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-95":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="5" class="svg-inline--fa fa-5 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-96":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="6" class="svg-inline--fa fa-6 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-97":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
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
        "location-pin-number-98":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="8" class="svg-inline--fa fa-8 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-number-99":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(-160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="9" class="svg-inline--fa fa-9 fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="transform-origin:0.625em 0.1875em">\
                  <g transform="translate(160 256)">\
                     <g transform="translate(160, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" transform="translate(-160 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-house":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="transform-origin:0.5625em 0.1875em">\
                  <g transform="translate(288 256)">\
                     <g transform="translate(0, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" transform="translate(-288 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
            </span>',
        "location-pin-tree":
            '<span class="fa-layers fa-fw">\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-pin" class="svg-inline--fa fa-location-pin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform-origin:0.375em 0.5em">\
                  <g transform="translate(192 256)">\
                     <g transform="translate(0, 0)  scale(2.5625, 2.5625)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" transform="translate(-192 -256)"></path>\
                     </g>\
                  </g>\
               </svg>\
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tree" class="svg-inline--fa fa-tree fa-inverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="transform-origin:0.4375em 0.1875em">\
                  <g transform="translate(224 256)">\
                     <g transform="translate(0, -160)  scale(1, 1)  rotate(0 0 0)">\
                        <path fill="currentColor" d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z" transform="translate(-224 -256)"></path>\
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
