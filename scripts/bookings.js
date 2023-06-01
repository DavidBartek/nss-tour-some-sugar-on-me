// this module will export an HTML string (unordered list) of bookings: "Band X is playing at Venue X on Date X"
// this module will create an event listener - 
//  when a booking is clicked, window alert displays containing all band info like so:
//      name
//      genre
//      year formed ("formed in XXXX")
//      num members ("X band members")

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
        htmlString += `<li id="booking--${booking.bookingId}">${band.bandName} is playing at ${venue.venueName} on ${booking.date}</li>`
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


// create an event listener - when a booking is clicked, displays window alert:
//      band name
//      band genre
//      band year formed ("formed in XXXX")
//      band num members ("X band members")

// event listener listens for:
// "click"
// and when the click's target is an element with id starting with "booking"

// iterate through bookings
// if booking.id (pk) === the clicked element's id: run the below code.

// use findBand function, defined earlier, to:
// iterate through bands
// if booking.bandId (fk) === band.id (pk), return that band object

// create a window alert and access the bands' respective properties in the order above

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.id.startsWith("booking")) {
            const [, bookingPK] = clickedItem.id.split("--")

            for (const booking of bookings) {
                if (booking.bookingId === parseInt(bookingPK)) {
                    const foundBand = findBand(booking, bands) // helper function 1; already defined for the exported HTML function above!

                    window.alert(`${foundBand.bandName}\n${foundBand.genre}\nFormed in ${foundBand.yearEstablished}\n${foundBand.numberOfMembers} band members`)
                }
            }
        }
    }
)

// helper function 1: match band to the booking's band id
// parameters: iterated booking; bands array
// you already made this above!!