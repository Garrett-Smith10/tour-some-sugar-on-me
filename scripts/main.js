import {  } from "./venues.js"
import {  } from "./bookings.js"
import {  } from "./bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="detail--column list details__bookings">
        <h2>Bookings</h2>
        ${}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${}
    </section>
</article>

<article class="bands">
    <h2>Bands</h2>
        ${}
</article>
`

mainContainer.innerHTML = applicationHTML