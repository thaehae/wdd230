const baseURL = "https://thaehae.github.io/wdd230/tree/main/cozumel/rentals.html";
const url = "https://github.com/thaehae/wdd230/cozumel/data/prices.json";
const prices = document.querySelector('#prices');
async function getRentalData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prices); // temporary testing of data retreival
    displayRentals(data.rentals); // note that we reference the members array of the JSON data object, not just the object
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        // Create elements to add to the div.bizcards element
        let price = document.createElement('section');
        let type = document.createElement('h2');
        let persons = document.createElement('p');
        let resHalf = document.createElement('p');
        let resFull = document.createElement('p');
        let walkHalf = document.createElement('p');
        let walkFull = document.createElement('p');


        type.textContent = `${rental.rental_type} `;
        persons.textContent = `${rental.max_persons}`;
        resHalf.textContent = `${rental.res_half_day}`;
        resFull.textContent = `${rental.res_full_day}`;
        walkHalf.textContent = `${rental.walk_half_day}`;
        walkFull.textContent = `${rental.walk_full_day}`;

        price.appendChild(type);
        price.appendChild(persons);
        price.appendChild(resHalf);
        price.appendChild(resFull);
        price.appendChild(walkHalf);
        price.appendChild(walkFull);

        prices.appendChild(price)

    }); // end of arrow function and forEach loop
}

getRentalData(url);