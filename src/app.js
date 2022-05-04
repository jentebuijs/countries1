import axios from 'axios';

async function fetchAllCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countries = response.data;
        fetchIt(countries);
    } catch(e) {
        console.error(e);
    }
}

function fetchIt(countries) {
    const countryList = document.getElementById('countryList');
    countries.map((country) => {
        return countryList.innerHTML += `
            <li>
            <span>
                <img src="${country.flag}">
            </span>
                <h1 class="${fetchRegionColor(country.region)}">${country.name}</h1>
                <p>Has a population of ${country.population} people</p>
            </li>
            `
    });

}

function fetchRegionColor(region) {
    switch (region) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        case 'default':
            return 'default';
    }
}

fetchAllCountries();


