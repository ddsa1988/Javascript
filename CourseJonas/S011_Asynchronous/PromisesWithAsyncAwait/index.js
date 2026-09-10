"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
    const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.svg}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${data.population}</p>
                        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                    </div>
            </article> `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};

const getPosition = async function () {
    let latitude;
    let longitude;

    const coords = navigator.geolocation.getCurrentPosition(
        function success(pos) {
            ({ latitude, longitude } = pos.coords);
        },
        function error(err) {
            console.error(err);
        },
    );

    return { latitude, longitude };
};

const getCountryName = async function (latitude, longitude) {
    const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );

    const data = await response.json();
    const { countryName } = data;

    return countryName;
};

const getCountryData = async function (country) {
    const response = await fetch(`https://countries.dev/name/${country}`);

    const data = await response.json();
    const [countryData] = data;

    return countryData;
};

btn.addEventListener("click", async function (event) {
    const { latitude, longitude } = await getPosition();

    const countryName = await getCountryName(latitude, longitude);

    const countryData = await getCountryData(countryName);

    console.log(countryData);

    renderCountry(countryData);
});
