// this module will export an HTML string (unordered list) of venues: "Venue X"
// this module will create an event listener - when a venue is clicked, window alert displays containing all bands that have booked the venue

import { getBookings } from "./database.js"
import { getVenues } from "./database.js"
import { getBands } from "./database.js"

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()

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

// event listener: when venue is clicked, window alert displays containing all bands which have booked the venue
// set up event listener which executes when target element's id starts with "venue"

// iterate through venue array; execute the following helper functions when the element's id = venue.id

// helper function 1: match venue id (pk) to booking.venueId (fk)
// parameters: current iterated venue; bookings array
// iterate bookings
// return an array of all booking objects which contain the matching venue id

// helper function 2: match booking.bandId (fk) to band id (pk)
// parameters: recently-generated filteredBookings array; bands array
// iterate bookings
// within that iteration: iterate bands
// create an array of all bands in the filtered bookings array
// create and return an array of the bands' names only

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.id.startsWith("venue")) {
            const [, venuePK] = clickedItem.id.split("--")

            for (const venue of venues) {
                if (venue.id === parseInt(venuePK)) {
                    const filteredBookings = filterBookings(venue, bookings) // helper function 1
                    let filteredBands = filterBands(filteredBookings, bands) // helper function 2
                    window.alert(`${venue.venueName} has been booked by ${filteredBands}`)
                }
            }
        }
    }
)

// helper function 1
const filterBookings = (venue, allBookings) => {
    let filteredBookings = []
    for (const booking of allBookings) {
        if (booking.venueId === venue.id) {
            filteredBookings.push(booking)
        }
    }
    return filteredBookings
}

// helper function 2
const filterBands = (filteredBookings, allBands) => {
    let filteredBands = []
    for (const booking of filteredBookings) {
        for (const band of allBands) {
            if (booking.bandId === band.id) {
                filteredBands.push(band.bandName)
            }
        }
    }
    return filteredBands
}