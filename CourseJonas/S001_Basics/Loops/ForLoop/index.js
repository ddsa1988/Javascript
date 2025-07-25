"use strict";

const maxValue = 10;
const numbers = [100, 200, 300];
const controlNumber = 200;

let text = "";

for (let i = 0; i < maxValue; i++) {
    text = text.concat(i, " ");
}

console.log(text + "\n");

for (let i = 0; i < numbers.length; i++) {
    console.log(`number[${i}] => ${numbers[i]}`);
}

console.log();

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`number[${i}] => ${numbers[i]}`);
}

console.log();

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === controlNumber) {
        break;
    }

    console.log(`number[${i}] => ${numbers[i]}`);
}

console.log();

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === controlNumber) {
        continue;
    }

    console.log(`number[${i}] => ${numbers[i]}`);
}

console.log();

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("i j => ", i, j);
    }
}
