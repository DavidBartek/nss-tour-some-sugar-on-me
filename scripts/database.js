// collections to populate:
// Bands (id; name; numMembers; genre; yearFormed)
// Venues (id; name; address; sqFt; maxOcc)
// Bookings (id; bandId; venueId; bookingDate)
// after database is populated: export via getter functions

const database = {
    venues: [
        {
            id: 1,
            venueName: "Sunset Lounge",
            address: "1234 Main St, Los Angeles, CA 12345",
            sizeInSquareFeet: 5000,
            maxOccupancy: 1000
        },
        {
            id: 2,
            venueName: "Moonlight Hall",
            address: "5678 Elm St, New York, NY 23456",
            sizeInSquareFeet: 3000,
            maxOccupancy: 800
        },
        {
            id: 3,
            venueName: "Star Plaza",
            address: "9012 Lake Rd, Chicago, IL 34567",
            sizeInSquareFeet: 4000,
            maxOccupancy: 900
        },
        {
            id: 4,
            venueName: "Harmony Center",
            address: "3456 Pine Ave, Miami, FL 45678",
            sizeInSquareFeet: 2500,
            maxOccupancy: 700
        },
        {
            id: 5,
            venueName: "City View Auditorium",
            address: "7890 Market St, San Francisco, CA 56789",
            sizeInSquareFeet: 3500,
            maxOccupancy: 950
        },
        {
            id: 6,
            venueName: "Garden Oasis",
            address: "2345 Maple Dr, Dallas, TX 67890",
            sizeInSquareFeet: 2000,
            maxOccupancy: 600
        },
        {
            id: 7,
            venueName: "Harbor View Hall",
            address: "6789 Ocean Ave, Seattle, WA 78901",
            sizeInSquareFeet: 3200,
            maxOccupancy: 850
        },
        {
            id: 8,
            venueName: "Mountain Summit Convention Center",
            address: "4321 Hilltop Rd, Denver, CO 89012",
            sizeInSquareFeet: 2800,
            maxOccupancy: 750
        },
        {
            id: 9,
            venueName: "Riverfront Plaza",
            address: "8765 Waterfront Dr, Nashville, TN 90123",
            sizeInSquareFeet: 1800,
            maxOccupancy: 500
        },
        {
            id: 10,
            venueName: "Golden Ballroom",
            address: "7890 Gold St, Las Vegas, NV 23456",
            sizeInSquareFeet: 4000,
            maxOccupancy: 1000
        }
    ],
    bands: [
        {
            id: 1,
            bandName: "The Beatles",
            numberOfMembers: 4,
            genre: "Rock",
            yearEstablished: 1960
        },
        {
            id: 2,
            bandName: "Led Zeppelin",
            numberOfMembers: 4,
            genre: "Rock",
            yearEstablished: 1968
        },
        {
            id: 3,
            bandName: "Queen",
            numberOfMembers: 4,
            genre: "Rock",
            yearEstablished: 1970
        },
        {
            id: 4,
            bandName: "Pink Floyd",
            numberOfMembers: 4,
            genre: "Progressive Rock",
            yearEstablished: 1965
        },
        {
            id: 5,
            bandName: "Nirvana",
            numberOfMembers: 3,
            genre: "Grunge",
            yearEstablished: 1987
        },
        {
            id: 6,
            bandName: "Metallica",
            numberOfMembers: 4,
            genre: "Metal",
            yearEstablished: 1981
        },
        {
            id: 7,
            bandName: "AC/DC",
            numberOfMembers: 5,
            genre: "Rock",
            yearEstablished: 1973
        },
        {
            id: 8,
            bandName: "Red Hot Chili Peppers",
            numberOfMembers: 6,
            genre: "Rock",
            yearEstablished: 1983
        },
        {
            id: 9,
            bandName: "Radiohead",
            numberOfMembers: 5,
            genre: "Alternative Rock",
            yearEstablished: 1985
        },
        {
            id: 10,
            bandName: "The Rolling Stones",
            numberOfMembers: 5,
            genre: "Rock",
            yearEstablished: 1962
        }
    ],
    bookings: [
        { bookingId: 1, bandId: 6, venueId: 7, date: '07/08/2023' },
        { bookingId: 2, bandId: 8, venueId: 9, date: '05/15/2023' },
        { bookingId: 3, bandId: 6, venueId: 1, date: '01/10/2022' },
        { bookingId: 4, bandId: 4, venueId: 9, date: '05/06/2022' },
        { bookingId: 5, bandId: 5, venueId: 2, date: '03/20/2023' },
        { bookingId: 6, bandId: 5, venueId: 10, date: '04/22/2023' },
        { bookingId: 7, bandId: 2, venueId: 1, date: '07/28/2022' },
        { bookingId: 8, bandId: 9, venueId: 10, date: '10/06/2022' },
        { bookingId: 9, bandId: 10, venueId: 5, date: '04/24/2023' },
        { bookingId: 10, bandId: 6, venueId: 8, date: '01/09/2023' },
        { bookingId: 11, bandId: 7, venueId: 3, date: '08/03/2023' },
        { bookingId: 12, bandId: 8, venueId: 3, date: '05/08/2023' },
        { bookingId: 13, bandId: 5, venueId: 5, date: '01/06/2023' },
        { bookingId: 14, bandId: 5, venueId: 4, date: '03/01/2023' },
        { bookingId: 15, bandId: 2, venueId: 1, date: '09/03/2022' }
    ],
    // created for Explorer Chapter. Thanks, ChatGPT!
    bandMembers: [
        // The Beatles
        {
            id: 1,
            firstName: "John",
            lastName: "Lennon",
            yearBorn: 1940,
            role: "Vocals, Guitar",
            bandId: 1
        },
        {
            id: 2,
            firstName: "Paul",
            lastName: "McCartney",
            yearBorn: 1942,
            role: "Vocals, Bass",
            bandId: 1
        },
        {
            id: 3,
            firstName: "George",
            lastName: "Harrison",
            yearBorn: 1943,
            role: "Guitar",
            bandId: 1
        },
        {
            id: 4,
            firstName: "Ringo",
            lastName: "Starr",
            yearBorn: 1940,
            role: "Drums",
            bandId: 1
        },

        // Led Zeppelin
        {
            id: 5,
            firstName: "Robert",
            lastName: "Plant",
            yearBorn: 1948,
            role: "Vocals",
            bandId: 2
        },
        {
            id: 6,
            firstName: "Jimmy",
            lastName: "Page",
            yearBorn: 1944,
            role: "Guitar",
            bandId: 2
        },
        {
            id: 7,
            firstName: "John",
            lastName: "Paul Jones",
            yearBorn: 1946,
            role: "Bass",
            bandId: 2
        },
        {
            id: 8,
            firstName: "John",
            lastName: "Bonham",
            yearBorn: 1948,
            role: "Drums",
            bandId: 2
        },

        // Queen
        {
            id: 9,
            firstName: "Freddie",
            lastName: "Mercury",
            yearBorn: 1946,
            role: "Vocals",
            bandId: 3
        },
        {
            id: 10,
            firstName: "Brian",
            lastName: "May",
            yearBorn: 1947,
            role: "Guitar",
            bandId: 3
        },
        {
            id: 11,
            firstName: "John",
            lastName: "Deacon",
            yearBorn: 1951,
            role: "Bass",
            bandId: 3
        },
        {
            id: 12,
            firstName: "Roger",
            lastName: "Taylor",
            yearBorn: 1949,
            role: "Drums",
            bandId: 3
        },

        // Pink Floyd
        {
            id: 13,
            firstName: "David",
            lastName: "Gilmour",
            yearBorn: 1946,
            role: "Vocals, Guitar",
            bandId: 4
        },
        {
            id: 14,
            firstName: "Roger",
            lastName: "Waters",
            yearBorn: 1943,
            role: "Bass",
            bandId: 4
        },
        {
            id: 15,
            firstName: "Richard",
            lastName: "Wright",
            yearBorn: 1943,
            role: "Keyboards",
            bandId: 4
        },
        {
            id: 16,
            firstName: "Nick",
            lastName: "Mason",
            yearBorn: 1944,
            role: "Drums",
            bandId: 4
        },

        // Nirvana
        {
            id: 17,
            firstName: "Kurt",
            lastName: "Cobain",
            yearBorn: 1967,
            role: "Vocals, Guitar",
            bandId: 5
        },
        {
            id: 18,
            firstName: "Krist",
            lastName: "Novoselic",
            yearBorn: 1965,
            role: "Bass",
            bandId: 5
        },
        {
            id: 19,
            firstName: "Dave",
            lastName: "Grohl",
            yearBorn: 1969,
            role: "Drums",
            bandId: 5
        },

        // Metallica
        {
            id: 20,
            firstName: "James",
            lastName: "Hetfield",
            yearBorn: 1963,
            role: "Vocals, Guitar",
            bandId: 6
        },
        {
            id: 21,
            firstName: "Kirk",
            lastName: "Hammett",
            yearBorn: 1962,
            role: "Guitar",
            bandId: 6
        },
        {
            id: 22,
            firstName: "Robert",
            lastName: "Trujillo",
            yearBorn: 1964,
            role: "Bass",
            bandId: 6
        },
        {
            id: 23,
            firstName: "Lars",
            lastName: "Ulrich",
            yearBorn: 1963,
            role: "Drums",
            bandId: 6
        },

        // AC/DC
        {
            id: 24,
            firstName: "Brian",
            lastName: "Johnson",
            yearBorn: 1947,
            role: "Vocals",
            bandId: 7
        },
        {
            id: 25,
            firstName: "Angus",
            lastName: "Young",
            yearBorn: 1955,
            role: "Guitar",
            bandId: 7
        },
        {
            id: 26,
            firstName: "Malcolm",
            lastName: "Young",
            yearBorn: 1953,
            role: "Guitar",
            bandId: 7
        },
        {
            id: 27,
            firstName: "Cliff",
            lastName: "Williams",
            yearBorn: 1949,
            role: "Bass",
            bandId: 7
        },
        {
            id: 28,
            firstName: "Phil",
            lastName: "Rudd",
            yearBorn: 1954,
            role: "Drums",
            bandId: 7
        },

        // Red Hot Chili Peppers
        {
            id: 29,
            firstName: "Anthony",
            lastName: "Kiedis",
            yearBorn: 1962,
            role: "Vocals",
            bandId: 8
        },
        {
            id: 30,
            firstName: "Flea",
            lastName: "Balzary",
            yearBorn: 1962,
            role: "Bass",
            bandId: 8
        },
        {
            id: 31,
            firstName: "John",
            lastName: "Frusciante",
            yearBorn: 1970,
            role: "Guitar",
            bandId: 8
        },
        {
            id: 32,
            firstName: "Chad",
            lastName: "Smith",
            yearBorn: 1961,
            role: "Drums",
            bandId: 8
        },

        // Radiohead
        {
            id: 33,
            firstName: "Thom",
            lastName: "Yorke",
            yearBorn: 1968,
            role: "Vocals, Guitar",
            bandId: 9
        },
        {
            id: 34,
            firstName: "Jonny",
            lastName: "Greenwood",
            yearBorn: 1971,
            role: "Guitar",
            bandId: 9
        },
        {
            id: 35,
            firstName: "Colin",
            lastName: "Greenwood",
            yearBorn: 1969,
            role: "Bass",
            bandId: 9
        },
        {
            id: 36,
            firstName: "Ed",
            lastName: "O'Brien",
            yearBorn: 1968,
            role: "Guitar",
            bandId: 9
        },
        {
            id: 37,
            firstName: "Philip",
            lastName: "Selway",
            yearBorn: 1967,
            role: "Drums",
            bandId: 9
        },

        // The Rolling Stones
        {
            id: 38,
            firstName: "Mick",
            lastName: "Jagger",
            yearBorn: 1943,
            role: "Vocals",
            bandId: 10
        },
        {
            id: 39,
            firstName: "Keith",
            lastName: "Richards",
            yearBorn: 1943,
            role: "Guitar",
            bandId: 10
        },
        {
            id: 40,
            firstName: "Charlie",
            lastName: "Watts",
            yearBorn: 1941,
            role: "Drums",
            bandId: 10
        },
        {
            id: 41,
            firstName: "Ronnie",
            lastName: "Wood",
            yearBorn: 1947,
            role: "Guitar",
            bandId: 10
        }
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

export const getBandMembers = () => {
    return database.bandMembers.map(m => ({...m}))
}