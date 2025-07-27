"use strict";

const num1El = document.getElementById("num1-el");
const num2El = document.getElementById("num2-el");

const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const divBtn = document.getElementById("div-btn");
const multiBtn = document.getElementById("multi-btn");

const textResult = document.getElementById("text-result");

const operators = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};

const operatorsName = {
    add: "add",
    subtract: "subtract",
    multiply: "multiply",
    divide: "divide",
};

const calculate = function (operator) {
    const num1 = Number(num1El.value);
    const num2 = Number(num2El.value);

    if (!(Number.isFinite(num1) && Number.isFinite(num2))) {
        textResult.textContent = "Invalid numbers.";
        return;
    }

    if (operators[operator] == null) {
        textResult.textContent = "Invalid operator.";
        return;
    }

    const result = operators[operator](num1, num2);

    if (!Number.isFinite(result)) {
        textResult.textContent = "Error to calculate result.";
        return;
    }

    textResult.textContent =
        operator.charAt(0).toUpperCase() +
        operator.substring(1) +
        ": " +
        result;
};

addBtn.addEventListener("click", () => calculate(operatorsName.add));

subBtn.addEventListener("click", () => calculate(operatorsName.subtract));

divBtn.addEventListener("click", () => calculate(operatorsName.divide));

multiBtn.addEventListener("click", () => calculate(operatorsName.multiply));
