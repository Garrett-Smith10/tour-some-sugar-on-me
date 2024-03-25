const database = {
    bands: [
        {
            id: 1,
            name: "Thunderstorm Symphony",
            members: 5,
            genre: "Heavy Metal",
            formed: 1801
        },
        {
            id: 2,
            name: "Cosmic Echo",
            members: 3,
            genre: "Rock",
            formed: 1492
        },
        {
            id: 3,
            name: "Neon Pulse",
            members: 4,
            genre: "Grunge",
            formed: 1991
        },
        {
            id: 4,
            name: "Crimson Skyline",
            members: 6,
            genre: "Hip-Hop",
            formed: 1975
        },
        {
            id: 5,
            name: "Lunar Horizon",
            members: 3,
            genre: "Pop",
            formed: 1985
        },
        {
            id: 6,
            name: "Eternal Flame",
            members: 5,
            genre: "Hard Rock",
            formed: 1972
        },
        {
            id: 7,
            name: "Midnight Serenade",
            members: 4,
            genre: "Cinematic",
            formed: 1967
        },
        {
            id: 8,
            name: "Solar Eclipse",
            members: 3,
            genre: "Punk Rock",
            formed: 1980
        },
        {
            id: 9,
            name: "Tempest Veil",
            members: 6,
            genre: "Heavy Metal",
            formed: 1988
        },
        {
            id: 10,
            name: "Echoing Dreams",
            members: 4,
            genre: "Alternative",
            formed: 2021
        },
        {
            id:11,
            name: "Crystal Shadows",
            members: 4,
            genre: "Symphonic Metal",
            formed: 2000
        },
        {
            id: 12,
            name: "Electric Storm",
            members: 5,
            genre: "Electronic Rock",
            formed: 1989
        },
        {
            id: 13,
            name: "Spectral Harmony",
            members: 3,
            genre: "Ambient",
            formed: 1998
        }
    ],
    venues: [
        {
            id: 1,
            name: "Electric Haven",
            address: "123 Rock Street",
            sqft: 5000,
            occupancy: 300
        },
        {
            id: 2,
            name: "Neon Lounge",
            address: "456 Dance Avenue",
            sqft: 7000,
            occupancy: 500
        },
        {
            id: 3,
            name: "Cosmic Arena",
            address: "789 Star Boulevard",
            sqft: 10000,
            occupancy: 800
        },
        {
            id: 4,
            name: "Midnight Ballroom",
            address: "321 Jazz Lane",
            sqft: 6000,
            occupancy: 400
        },
        {
            id: 5,
            name: "Starry Stage",
            address: "987 Moonlight Road",
            sqft: 8000,
            occupancy: 600
        }
    ],
    bookings: [
        {
            id: 1,
            bandId: 3,
            venueId: 2,
            date: "4/1/2024"
        },
        {
            id: 2,
            bandId: 7,
            venueId: 1,
            date: "4/1/2024"
        },
        {
            id: 3,
            bandId: 1,
            venueId: 4,
            date: "4/2/2024"
        },
        {
            id: 4,
            bandId: 5,
            venueId: 3,
            date: "4/2/2024"
        },
        {
            id: 5,
            bandId: 10,
            venueId: 2,
            date: "4/3/2024"
        },
        {
            id: 6,
            bandId: 1,
            venueId: 1,
            date: "4/3/2024"
        },
        {
            id: 7,
            bandId: 2,
            venueId: 3,
            date: "4/4/2024"
        },
        {
            id: 8,
            bandId: 9,
            venueId: 4,
            date: "4/4/2024"
        },
        {
            id: 9,
            bandId: 4,
            venueId: 5,
            date: "4/5/2024"
        },
        {
            id: 10,
            bandId: 6,
            venueId: 5,
            date: "4/5/2024"
        }
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}