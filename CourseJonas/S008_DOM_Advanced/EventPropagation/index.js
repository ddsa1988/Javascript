"use strict";

const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();

    console.log("Nav", e.target, e.currentTarget);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();

    console.log("Links", e.target, e.currentTarget);
});

document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", function (e) {
        this.style.backgroundColor = randomColor();

        console.log("Link", e.target, e.currentTarget);

        // e.stopPropagation(); // Stop event propagation
    });
});
