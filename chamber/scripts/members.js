const baseURL = "https://thaehae.github.io/wdd230/";
const url = "https://github.com/thaehae/wdd230/tree/main/chamber/data/members.json";
const bizcards = document.querySelector('#bizcards');
async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayMembers(data.members); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.bizcards element
        let bizcard = document.createElement('section');
        let bizName = document.createElement('h2');
        let portrait = document.createElement('img');
        let bizAddress = document.createElement('p');
        let bizPhone = document.createElement('p');
        let bizEmail = document.createElement('p');
        let bizWebsite = document.createElement('p');
        let bizmLevel = document.createElement('p');
        let bizidNumber = document.createElement('p');


        bizName.textContent = `${bizcard.business_name} `;
        bizAddress.textContent = `🏡 ${bizcard.address}`;
        bizPhone.textContent = `☎ ${bizcard.phone}`;
        bizEmail.textContent = `💻 ${bizcard.email}`;
        bizWebsite.textContent = `📧 ${bizcard.website}`;
        bizmLevel.textContent = `🥇 ${bizcard.membership_level}`;
        bizidNumber = `🛂 ${bizcard.ID}`;
        portrait.setAttribute('src', bizcard.imageurl);
        portrait.setAttribute('alt', `Portrait of ${bizcard.bizName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        bizcard.appendChild(bizName);
        bizcard.appendChild(bizAddress);
        bizcard.appendChild(bizPhone);
        bizcard.appendChild(bizEmail);
        bizcard.appendChild(bizWebsite);
        bizcard.appendChild(bizmLevel);
        bizcard.appendChild(bizidNumber);
        bizcard.appendChild(portrait);



        bizcards.appendChild(bizcard);
    }); // end of arrow function and forEach loop
}

getMemberData(url);