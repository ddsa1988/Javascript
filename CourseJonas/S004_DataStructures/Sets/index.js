"use strict";

const arr = ["Diego", "Diego", "Amanda", "Amanda"];
const uniqueValues = new Set(arr);

console.log(uniqueValues);
console.log();

for (const value of uniqueValues) {
    console.log(value);
}
console.log();

console.log(uniqueValues.has("Amanda"));
console.log();

console.log(uniqueValues.entries());
console.log(uniqueValues.keys());
console.log(uniqueValues.values());

console.log();
console.log(new Set("Amanda"));
console.log(new Set("Amanda").size);
