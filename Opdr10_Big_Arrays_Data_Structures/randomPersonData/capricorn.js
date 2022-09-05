// Capricorn women

const displayCapricornWomen = () => {

    const personSort = randomPersonData.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    //console.log(personSort);

    const getCapricornWomen =
        personSort
            .map(person => person)
            .filter(person => person.gender === "female")
            .filter(person => person.age >= 30)
            .filter(person => (
                new Date(person.birthday.mdy).getMonth() === 11
                && new Date(person.birthday.mdy).getDate() > 21)
                ||
                (new Date(person.birthday.mdy).getMonth() === 0
                    && new Date(person.birthday.mdy).getDate() < 20));

    //console.log(personFilter2);

    const persons = getCapricornWomen.map(({ name, surname, photo }) => ({ name, surname, photo }));
    persons.forEach(person => {
        const li = document.createElement("li");
        const nameSpan = document.createElement("span");
        const photoSpan = document.createElement("span");
        nameSpan.innerText = `${person.name} ${person.surname}`;
        li.appendChild(nameSpan);
        const img = document.createElement("img");
        img.src = `${person.photo}`;
        photoSpan.appendChild(img);
        li.appendChild(photoSpan);
        addResultsToHTML(li);
        //console.log(persons)
    });
};
//displayCapricornWomen();