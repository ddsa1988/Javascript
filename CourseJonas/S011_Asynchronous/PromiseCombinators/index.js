"use strict";

// Promise.race
const getCountryData = async function (country) {
    const response = await fetch(`https://countries.dev/name/${country}`);

    const data = await response.json();
    const [countryData] = data;

    return countryData;
};

const getThreeCountries = async function (country1, country2, country3) {
    try {
        const data = await Promise.race([getCountryData(country1), getCountryData(country2), getCountryData(country3)]);

        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

getThreeCountries("Brazil", "France", "Germany");
