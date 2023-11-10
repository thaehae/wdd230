const baseURL = "https://thaehae.github.io/wdd230/";
const linksURL = "https://thaehae.github.io/wdd230/data/links.json";
const li = document.querySelector('#li');
async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.links);
}

const displayLinks = (links) => {
    links.forEach((link) => {

        let lessonLink = document.createElement('section');
        let weeks = document.createElement('a');

        lessonLink.textContent = `lesson: ${link.url}`;
        weeks.textContent = `lesson: ${link.title} `;

        li.setAttribute(`${link.url} ${link.title} `);

        li.appendChild(lessonLink);
        li.appendChild(weeks);
    }); // end of arrow function and forEach loop
}
getLinks(linksURL);