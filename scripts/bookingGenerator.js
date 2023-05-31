// this generates 15 bookings to be copy + pasted into the database.
// ChatGPT generated this for me so I could get a quick collection.

// Generate an array of 15 objects
const bookings = [];

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 15 objects with booking ID, band ID, venue ID, and date
for (let i = 1; i <= 15; i++) {
    const booking = {
        bookingId: i,
        bandId: getRandomNumber(1, 10),
        venueId: getRandomNumber(1, 10),
        date: `${getRandomNumber(1, 12).toString().padStart(2, '0')}/${getRandomNumber(1, 28).toString().padStart(2, '0')}/${getRandomNumber(2022, 2023)}`
    };
    bookings.push(booking);
}

console.log(bookings);
