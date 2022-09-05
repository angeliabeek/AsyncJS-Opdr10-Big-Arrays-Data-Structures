// Country list
const getCountries = () => {
    const countries = randomPersonData.map(person => person.region).sort();
    return countries;
};
//console.log(getCountries());

const createCountriesHTML = country => {
    const li = document.createElement("li");
    li.innerText = country;
    return li;
};
//console.log(createCountriesHTML());

const displayCountries = () => {
    getCountries(randomPersonData)
        .map(createCountriesHTML)
        .forEach(addResultsToHTML);
};







