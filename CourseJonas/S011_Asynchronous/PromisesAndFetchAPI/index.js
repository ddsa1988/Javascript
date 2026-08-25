"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// "https://countries.dev/name/portugal"

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

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

const getCountryData = function (country) {
    const request = fetch(`https://countries.dev/name/${country}`);

    console.log(request);

    request.then((response) => {
        console.log(response);

        const jsonPromise = response.json();

        jsonPromise.then((data) => {
            const [country] = data;

            console.log(data);
            console.log(country);
            renderCountry(country);

            const neighbors = country.borders;

            if (neighbors == undefined) return;

            neighbors.forEach((neighbor) => {
                fetch(`https://countries.dev/alpha/${neighbor}?fields=name%2Ccapital%2Cflag&full=true`)
                    .then((response) => response.json())
                    .then((data) => renderCountry(data, "neighbor"));
            });
        });
    });

    // fetch(`https://countries.dev/name/${country}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         const [country] = data;

    //         renderCountry(country);

    //         const neighbors = country.borders;

    //         if (neighbors == undefined) return;

    //         neighbors.forEach((neighbor) => {
    //             fetch(`https://countries.dev/alpha/${neighbor}?fields=name%2Ccapital%2Cflag&full=true`)
    //                 .then((response) => response.json())
    //                 .then((data) => renderCountry(data, "neighbor"));
    //         });
    //     });
};

getCountryData("mexico");
