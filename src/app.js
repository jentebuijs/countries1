import axios from 'axios';

const countryList = document.getElementById('countryList');

async function fetchAllCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countries = response.data;
        countries.sort((a, b) => a.population - b.population);
        fetchIt(countries);
    } catch (e) {
        console.error(e);
    }
}

function fetchIt(countries) {
    countryList.innerHTML = countries.map((country) => {
        return `
            <li>
                <h1 class="${fetchRegionColor(country.region)}">${country.name}</h1>
            </li>
        `
    }).join('');
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
