/* this module will import the venues information from the database 
and then through a series of for loops and eventListeners have the information
ready to be displayed */
import { getBands, getBookings, getVenues } from "./database.js";


let venues = getVenues()

export const Venues = () => {

    let venuesHTML = "<ul>"
    for (const venue of venues) {
        venuesHTML += `<li data-type="venues" data-id="${venue.id}" data-name="${venue.name}" > ${venue.name}</li>`
    }
    venuesHTML += "</ul>"
    return venuesHTML
    
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const bookings = getBookings()
        const bands = getBands()

        let bandNamesArray = []

        
        const itemClicked = clickEvent.target
        
        const venueName = itemClicked.dataset.name
        const venueId = itemClicked.dataset.id

        if (itemClicked.dataset.type === "venues") {

            for (const booking of bookings) {
                
                if (parseInt(venueId) === booking.venueId) {
                    
                    for (const band of bands) {
                        
                        if (band.id === booking.bandId) {
                            bandNamesArray.push(band.name)
                        }
                    }
                }
            }
                window.alert(`${bandNamesArray.join(" and ")} are playing at ${venueName}`)
        }
    }
)
    

 