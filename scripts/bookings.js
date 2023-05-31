// this module will export an HTML string (unordered list) of bookings: "Band X is playing at Venue X on Date X"
// this module will create an event listener - 
//  when a booking is clicked, window alert displays containing all band info like so:
//      name
//      genre
//      year formed ("formed in XXXX")
//      num members ("X band members")
//  likely that each of these will be called by independent functions

import { getBookings } from "./database.js"
import { getVenues } from "./database.js"
import { getBands } from "./database.js"

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()

// HTML string: exports an unordered list of each booking
// each li should appear in the browser as: Band X is playing at Venue X on Date X
// each list item should be formatted: `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date}</li>`
// will need to access data from bookings array; use the foreign keys to access the venues and bands array

// iterate through the bookings array

// helper function 1: findBand
// pass in current booking of the iteration and the bands array
// iterate bands
// when booking.bandId (fk) === band.id (pk):
// assign that band object to variable, foundBand
// return foundBand

// helper function 2: findVenue
// exact same logic as above; replace bands with venues

// return HTML string

export const Bookings = () => {
    let htmlString = "<ul>"
    for (const booking of bookings) {
        const band = findBand(booking, bands)// helper function 1
        const venue = findVenue(booking, venues) // helper function 2
        htmlString += `<li id="booking--${booking.id}">${band.bandName} is playing at ${venue.venueName} on ${booking.date}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

const findBand = (booking, allBands) => {
    let foundBand

    for (const band of allBands) {
        if (booking.bandId === band.id) {
            foundBand = band
        }
    }

    return foundBand
}

const findVenue = (booking, allVenues) => {
    let foundVenue

    for (const venue of allVenues) {
        if (booking.venueId === venue.id) {
            foundVenue = venue
        }
    }

    return foundVenue
}

document.addEventListener(
    "click",
    (clickEvent) => {

    }
)