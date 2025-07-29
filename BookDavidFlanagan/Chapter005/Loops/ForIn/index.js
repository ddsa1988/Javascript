"use strict";

const obj = {
    x: 10,
    y: 20,
};

for (const key in obj) {
    console.log(key);
}

console.log();

for (const key in obj) {
    console.log(obj[key]);
}

console.log();

for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
}
