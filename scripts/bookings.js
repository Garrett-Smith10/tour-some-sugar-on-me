/* This module will import bands and venues from the 
database and create bookings with them */
import {getBookings, getBands, getVenues} from "./database.js" 

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


 

// Function whose responsibility is to find the band for a booking
const findBand = (booking, allBands) => {
    let bandBooking = ""

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bandBooking = band
        }
    }
    return bandBooking
}

// Function whose responsibility is to find the employee for an order
const findVenue = (booking, allVenues) => {
     let venueBooking = ""
    
    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            venueBooking = venue
        }
    }
    return venueBooking
}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li data-type="bookings" data-id="${booking.bandId}" >${band.name} are playing at ${venue.name} on ${booking.date}</li>`
    }
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "bookings") {

            const bookingId = itemClicked.dataset.id

            let bookingName = ""

            for (const band of bands) {
                if (parseInt(bookingId) === band.id) {
                    window.alert(` Name: ${band.name} \n Members: ${band.members} \n Genre: ${band.genre} \n Year Formed: ${band.formed}`)
                }
                
            }
        }
    }
)
