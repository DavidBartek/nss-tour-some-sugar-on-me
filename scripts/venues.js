// this module will export an HTML string (unordered list) of venues: "Venue X"
// this module will create an event listener - when a venue is clicked, window alert displays containing all bands that have booked the venue

import { getVenues } from "./database.js"

const venues = getVenues()

// HTML string: exports an unordered list of each venue's name
// each list item should be formatted: <li id="venue--${venue.id}">${venue.name}</li>
// iterate through each venue in the venues array; 
//      access id property; add to HTML string
//      access name property; add to HTML string; 
// return HTML string
export const Venues = () => {
    let htmlString = "<ul>"
    for (const venue of venues) {
        htmlString += `<li id="venue--${venue.id}">${venue.venueName}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {

    }
)