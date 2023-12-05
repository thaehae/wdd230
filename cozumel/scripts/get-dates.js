const dateYear = document.querySelector(".date");
const year = new Date().getFullYear();
dateYear.textContent = year

const modifyDate = document.querySelector(".update");
const mod = new Date(document.lastModified).toLocaleString();
modifyDate.textContent = mod