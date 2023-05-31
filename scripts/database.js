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