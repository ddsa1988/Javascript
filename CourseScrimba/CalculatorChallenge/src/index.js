"use strict";

const num1El = document.getElementById("num1-el");
const num2El = document.getElementById("num2-el");

const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const divBtn = document.getElementById("div-btn");
const multiBtn = document.getElementById("multi-btn");

const result = document.getElementById("result");

const addition = function () {
    const num1 = Number(num1El.value);
    const num2 = Number(num2El.value);

    if (!(Number.isFinite(num1) && Number.isFinite(num2))) {
        return;
    }

    result.textContent = `Sum: ${num1 + num2}`;
};

const subtraction = function () {
    const num1 = Number(num1El.value);
    const num2 = Number(num2El.value);

    if (!(Number.isFinite(num1) && Number.isFinite(num2))) {
        return;
    }

    result.textContent = `Sum: ${num1 - num2}`;
};

const division = function () {
    const num1 = Number(num1El.value);
    const num2 = Number(num2El.value);

    if (!(Number.isFinite(num1) && Number.isFinite(num2))) {
        return;
    }

    if (num2 === 0) {
        result.textContent = "Error: Division by zero.";
    } else {
        result.textContent = `Sum: ${num1 / num2}`;
    }
};

const multiplication = function () {
    const num1 = Number(num1El.value);
    const num2 = Number(num2El.value);

    if (!(Number.isFinite(num1) && Number.isFinite(num2))) {
        return;
    }

    result.textContent = `Sum: ${num1 * num2}`;
};

addBtn.addEventListener("click", addition);

subBtn.addEventListener("click", subtraction);

divBtn.addEventListener("click", division);

multiBtn.addEventListener("click", multiplication);
