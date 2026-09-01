"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
let counter = 0;

// Test data:
// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// Coordinates 2: 19.037, 72.873
// Coordinates 3: -33.933, 18.474

// https://countries.dev/name/${country}
// https://countries.dev/alpha/${neighbor}?fields=name%2Ccapital%2Cflag&full=true

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

const whereAmI = function (latitude, longitude) {
    const countryName = fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch coordinates (${response.status}) `);
            }

            return response.json();
        })
        .then((data) => {
            const { countryName } = data;

            if (countryName == undefined) {
                throw new Error("Failed to get the country name.");
            }

            return countryName;
        })
        .catch((error) => {
            console.error(`Something went wrong: ${error.message}`);
        });

    countryName.then((country) => {
        fetch(`https://countries.dev/name/${country}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch country name (${response.status}) `);
                }

                return response.json();
            })
            .then((data) => {
                const [country] = data;
                renderCountry(country);

                const neighbors = country.borders;

                if (neighbors == undefined) return;

                neighbors.forEach((neighbor) => {
                    fetch(`https://countries.dev/alpha/${neighbor}?fields=name%2Ccapital%2Cflag&full=true`)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(`Country not found (${response.status})`);
                            }

                            return response.json();
                        })
                        .then((data) => renderCountry(data, "neighbor"))
                        .catch((error) => console.error(`An error occurred: ${error.message}`));
                });
            })
            .catch((error) => {
                console.error(`Something went wrong: ${error.message}`);
            });
    });
};

btn.addEventListener("click", function (event) {
    let lat, long;

    switch (counter) {
        case 0:
            [lat, long] = [52.508, 13.381];
            counter++;
            break;
        case 1:
            [lat, long] = [19.037, 72.873];
            counter++;
            break;
        case 2:
            [lat, long] = [-33.933, 18.474];
            counter = 0;
            break;
    }

    countriesContainer.replaceChildren();

    whereAmI(lat, long);
});
