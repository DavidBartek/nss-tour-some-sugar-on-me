// import all modules' HTML-building functions here

import { Bookings } from "./bookings.js"
import { Venues } from "./venues.js"
import { Bands } from "./bands.js"

// main.js will dynamically build all HTML elements based on how each module pulls data from database.js

const mainContainer = document.querySelector("#container") // accesses HTML document elements with id of container; assigns to mainContainer

const applicationHTML = `
<article class="bookings">
    <h2 id="bookings--heading">Current Bookings</h2>
    ${Bookings()}
</article>

<article class="lists">
    <section class="lists--column">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="lists--column">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML // overwrites children of HTML element(s) with id specified above with the string assigned to applicationHTML