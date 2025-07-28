"use strict";

const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");

const number = document.querySelector(".number");
const guess = document.querySelector(".guess");

const between = document.querySelector(".between");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

const minNumber = 1;
const maxNumber = 20;
const startScore = 20;

let randomNumber = 0;
let maxScore = 0;

const getRandomNumber = function (min, max) {
    if (!(Number.isFinite(min) && Number.isFinite(max))) {
        return Number.MIN_SAFE_INTEGER;
    }

    return Math.floor(Math.random() * (max - min) + min);
};

const initGame = function () {
    number.textContent = "?";
    guess.value = "";
    between.textContent = `(Between ${minNumber} and ${maxNumber})`;
    message.textContent = "Start guessing...";
    score.textContent = startScore.toString();
    highScore.textContent = maxScore.toString();

    randomNumber = getRandomNumber(minNumber, maxNumber);
};

addEventListener("load", initGame);

btnAgain.addEventListener("click", initGame);

btnCheck.addEventListener("click", () => {
    console.log(number.textContent);
    console.log(guess.value);
    console.log(between.textContent);
    console.log(message.textContent);
    console.log(score.textContent);
    console.log(highScore.textContent);
    console.log(randomNumber);
});
