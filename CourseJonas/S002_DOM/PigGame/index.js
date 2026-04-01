"use strict";

const numberOfPlayers = 2;
const numberOfDiceFaces = 6;
const winningScore = 100;

const players = new Array(numberOfPlayers);
const scores = new Array(numberOfPlayers);
const currentScores = new Array(numberOfPlayers);

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentPlayer;

players[0] = document.querySelector(".player--0");
players[1] = document.querySelector(".player--1");
scores[0] = document.querySelector("#score--0");
scores[1] = document.querySelector("#score--1");
currentScores[0] = document.querySelector("#current--0");
currentScores[1] = document.querySelector("#current--1");

const initGame = function () {
    currentPlayer = getRandomPlayer();

    for (let i = 0; i < numberOfPlayers; i++) {
        scores[i].textContent = 0;
        currentScores[i].textContent = 0;
        players[i].classList.remove("player--active");
        players[i].classList.remove("player--winner");
    }

    players[currentPlayer].classList.add("player--active");
    dice.classList.add("hidden");

    btnRoll.disabled = false;
    btnHold.disabled = false;
};

const getRandomPlayer = function () {
    return Math.trunc(Math.random() * numberOfPlayers);
};

const getRandomDiceNumber = function () {
    return Math.trunc(Math.random() * (numberOfDiceFaces - 1) + 1);
};

const switchPlayer = function () {
    players[currentPlayer].classList.remove("player--active");
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    players[currentPlayer].classList.add("player--active");
};

const showWinner = function () {
    players[currentPlayer].classList.remove("player--active");
    players[currentPlayer].classList.add("player--winner");
    dice.classList.add("hidden");

    btnRoll.disabled = true;
    btnHold.disabled = true;
};

const rollDice = function () {
    const diceNumber = getRandomDiceNumber();
    let currentScore = Number(currentScores[currentPlayer].textContent);

    dice.src = `./Assets/Images/dice-${diceNumber}.png`;

    if (dice.classList.contains("hidden")) {
        dice.classList.remove("hidden");
    }

    if (diceNumber === 1) {
        currentScores[currentPlayer].textContent = 0;
        switchPlayer();
        return;
    }

    currentScore += diceNumber;
    currentScores[currentPlayer].textContent = currentScore;
};

const holdScore = function () {
    const currentScore = Number(currentScores[currentPlayer].textContent);
    const score = Number(scores[currentPlayer].textContent);
    const totalScore = score + currentScore;

    scores[currentPlayer].textContent = totalScore;
    currentScores[currentPlayer].textContent = 0;

    if (totalScore < winningScore) {
        switchPlayer();
        return;
    }

    showWinner();
};

document.addEventListener("DOMContentLoaded", (e) => {
    initGame();
});

btnNew.addEventListener("click", initGame);

btnRoll.addEventListener("click", rollDice);

btnHold.addEventListener("click", holdScore);
