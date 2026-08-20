"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// "https://countries.dev/name/portugal"

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const getCountryData = function (country) {
    const request = new XMLHttpRequest();

    request.open("GET", `https://countries.dev/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
            <article class="country">
                <img class="country__img" src="${data.flags.svg}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${data.population}</p>
                        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                    </div>
            </article> `;

        countriesContainer.insertAdjacentHTML("afterend", html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData("portugal");
