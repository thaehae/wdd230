const baseURL = "https://thaehae.github.io/wdd230/";
const url = "https://github.com/thaehae/wdd230/blob/main/chamber/data/members.json";
const bizcards = document.querySelector('#bizcards');
async function getMemberData(baseURL, url) {
    const response = await fetch(baseURL, url);
    const data = await response.json();
    //console.table(data.members); // temporary testing of data retreival
    displayMembers(data.members); // note that we reference the members array of the JSON data object, not just the object
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


        bizName.textContent = `🌏${member.business_name} `;
        bizAddress.textContent = `🏡 ${member.address}`;
        bizPhone.textContent = `☎ ${member.phone}`;
        bizEmail.textContent = `💻 ${member.email}`;
        bizWebsite.textContent = `📧 ${member.website}`;
        bizmLevel.textContent = `🥇 ${member.membership_level}`;
        bizidNumber = `🛂 ${member.ID}`;
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.bizName}`);
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
getMemberData(baseURL);
getMemberData(url);