// this module will export an HTML string (unordered list) of bands: "Band X"
// this module will create an event listener - when a band is clicked, window alert displays containing all venues band is playing at

import { getBands } from "./database.js"
const bands = getBands()

// HTML string: exports an unordered list of each band's name
// each list item should be formatted: <li id="band--${band.id}">${band.name}</li>
// iterate through each band in the bands array; 
//      access id property; add to HTML string
//      access name property; add to HTML string; 
// return HTML string

export const Bands = () => {
    let htmlString = "<ul>"
    for (const band of bands) {
        htmlString += `<li id="band--${band.id}">${band.bandName}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {

    }
)