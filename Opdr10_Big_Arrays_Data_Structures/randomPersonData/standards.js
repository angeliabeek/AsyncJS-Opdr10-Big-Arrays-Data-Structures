// Variables
const getFirstButton = document.getElementById("country-list");
const getSecondButton = document.getElementById("capricorn-women");
const getThirdButton = document.getElementById("old-credit-cards");
const getFourthButton = document.getElementById("most-people");
const getFifthButton = document.getElementById("average-age");
const getSixthButton = document.getElementById("matchmaking");
const getUl = document.getElementById("results");

// Buttons
const removeResults = () => {
    getUl.querySelectorAll('*').forEach(n => n.remove());
};
getFirstButton.addEventListener("click", function () {
    removeResults();
    displayCountries();
});
getSecondButton.addEventListener("click", function () {
    removeResults();
    displayCapricornWomen();
});
getThirdButton.addEventListener("click", function () {
    removeResults();
});
getFourthButton.addEventListener("click", function () {
    removeResults();
});
getFifthButton.addEventListener("click", function () {
    removeResults();
});
getSixthButton.addEventListener("click", function () {
    removeResults();
});


// HTML
const addResultsToHTML = li => {
    getUl.appendChild(li);
};







