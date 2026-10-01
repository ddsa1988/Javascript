"use strict";

const getCountryData = async function (country) {
    const response = await fetch(`https://countries.dev/name/${country}`);

    const data = await response.json();
    const [countryData] = data;

    return countryData;
};

const getThreeCountries = async function (country1, country2, country3) {
    try {
        const data = await Promise.all([getCountryData(country1), getCountryData(country2), getCountryData(country3)]);

        console.log(data);

        console.log(data.map((country) => country.capital));

        for (const country of data) {
            console.log(country.capital);
        }
    } catch (err) {
        console.error(err);
    }
};

getThreeCountries("Brazil", "France", "Germany");
