import {  Venues } from "./venues.js"
import { Bookings } from "./bookings.js"
import { Bands } from "./bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="header">Tour Some Sugar On Me</h1>
<article class="bookings">
<section class="detail--column list details__bookings">
<h2 class="bookings_header">Bookings</h2>
${Bookings()}
</section>
</article>
<article class="venues_bands">
<section class="detail--column list details__venues">
        <h2 class="venues_header">Venues</h2>
        ${Venues()}
    </section>
<section>
<h2 class="bands_header">Bands</h2>
${Bands()}     
</section>
</article>
`

mainContainer.innerHTML = applicationHTML