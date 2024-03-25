/* this module will import the band information from the database 
and then through a series of for loops and eventListeners have the information
ready to be displayed */
import { getBands, getBookings, getVenues } from "./database.js"

let bands = getBands()

export const Bands = () => {
    
    let venuesHTML = "<ul>"
    for (const band of bands) {
        venuesHTML += `<li data-type="bands" data-id="${band.id}" data-name="${band.name}" >${band.name}</li>`
    }
    venuesHTML += "</ul>"
    return venuesHTML
    
    
}

document.addEventListener(
    "click",
    (clickEvent) => {
        let bookings = getBookings()
        let venues = getVenues()

        let venueNameArray = []

        
        const itemClicked = clickEvent.target

        const bandName = itemClicked.dataset.name
        
        const bandId = itemClicked.dataset.id
        
        if(itemClicked.dataset.type === "bands") {
            for (const booking of bookings) {

                if (parseInt(bandId) === booking.bandId) {
                    
                    for (const venue of venues) {
                        
                        if (venue.id === booking.venueId) {
                            venueNameArray.push(venue.name)
                        }
                    }
                }  
            }
            window.alert(`${bandName} play at ${venueNameArray.join(" and ")}`)
        }
    }
)