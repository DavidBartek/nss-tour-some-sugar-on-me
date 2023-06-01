// this module will export an HTML string (unordered list) of bands: "Band X"
// this module will create an event listener - when a band is clicked, window alert displays containing all venues band is playing at

import { getBookings } from "./database.js"
import { getVenues } from "./database.js"
import { getBands } from "./database.js"

const bookings = getBookings()
const venues = getVenues()
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

// event listener: when band is clicked, window alert displays containing all venues which the band has booked
// set up event listener which executes when target element's id starts with "band"

// iterate through bands array; execute the following helper functions when the element's id = band.id

// helper function 1: match band id (pk) to booking.bandId (fk)
// parameters: current iterated band; bookings array
// iterate bookings
// return an array of all booking objects which contain the matching band id

// helper function 2: match booking.venueId (fk) to venue id (pk)
// parameters: recently-generated filteredBookings array; venues array
// iterate bookings
// within that iteration: iterate venues
// create an array of all venues in the filtered bookings array
// create and return an array of the venues' names only

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.id.startsWith("band")) {
            const [, bandPK] = clickedItem.id.split("--")

            for (const band of bands) {
                if (band.id === parseInt(bandPK)) {
                    const filteredBookings = filterBookings(band, bookings) // helper function 1
                    let filteredVenues = filterVenues(filteredBookings, venues) // helper function 2
                    if (filteredVenues.length === 0) { // conditional statement accounting for a band not being booked ()
                        window.alert(`${band.bandName} has been booked by no one :(`)
                    } else {
                        window.alert(`${band.bandName} has been booked by ${filteredVenues}`)
                    }
                }
            }
        }
    }
)

// helper function 1
const filterBookings = (band, allBookings) => {
    let filteredBookings = []
    for (const booking of allBookings) {
        if (booking.bandId === band.id) {
            filteredBookings.push(booking)
        }
    }
    return filteredBookings
}

// helper function 2
const filterVenues = (filteredBookings, allVenues) => {
    let filteredVenues = []
    for (const booking of filteredBookings) {
        for (const venue of allVenues) {
            if (booking.venueId === venue.id) {
                filteredVenues.push(venue.venueName)
            }
        }
    }
    return filteredVenues
}