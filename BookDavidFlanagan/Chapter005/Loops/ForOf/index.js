"use strict";

const numbers = [0, 1, 2];

const obj = {
    x: 10,
    y: 20,
};

const frequency = {};
const word = "mississippi";

for (const number of numbers) {
    console.log(number);
}

console.log();

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} => ${value}`);
}

console.log();

for (const key of Object.keys(obj)) {
    console.log(key);
}

console.log();

for (const value of Object.values(obj)) {
    console.log(value);
}

console.log();

for (const ch of word) {
    if (frequency.hasOwnProperty(ch)) {
        frequency[ch] += 1;
    } else {
        frequency[ch] = 1;
    }
}

console.log(frequency);
