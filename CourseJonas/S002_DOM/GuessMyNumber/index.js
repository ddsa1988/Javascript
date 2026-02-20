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
let actualScore = 0;
let maxScore = 0;

const getRandomNumber = function (min, max) {
    if (!(Number.isFinite(min) && Number.isFinite(max))) {
        return Number.MIN_SAFE_INTEGER;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const initGame = function () {
    number.textContent = "?";
    guess.value = "";
    guess.disabled = false;
    btnCheck.disabled = false;
    between.textContent = `(Between ${minNumber} and ${maxNumber})`;
    message.textContent = "Start guessing...";
    score.textContent = startScore.toString();
    highScore.textContent = maxScore.toString();

    actualScore = startScore;
    randomNumber = getRandomNumber(minNumber, maxNumber);
    document.body.style.backgroundColor = "#222";
};

const gameOver = function () {
    guess.disabled = true;
    btnCheck.disabled = true;
    number.textContent = randomNumber.toString();
    highScore.textContent = maxScore.toString();
};

const checkGuess = function () {
    const guessNumber = Number(guess.value);

    if (!(Number.isFinite(guessNumber) && guessNumber > 0)) {
        message.textContent = "⛔️ No number!";
        return;
    }

    if (guessNumber === randomNumber) {
        if (actualScore > maxScore) {
            maxScore = actualScore;
        }

        message.textContent = "🎉 Correct Number!";
        document.body.style.backgroundColor = "#60b347";
        gameOver();

        return;
    }

    score.textContent = --actualScore;

    message.textContent =
        guessNumber < randomNumber ? "📉 Too low" : "📈 Too high!";

    if (actualScore === 0) {
        message.textContent = "💥 You lost the game!";
        gameOver();
    }
};

addEventListener("load", initGame);

btnAgain.addEventListener("click", initGame);

btnCheck.addEventListener("click", checkGuess);
