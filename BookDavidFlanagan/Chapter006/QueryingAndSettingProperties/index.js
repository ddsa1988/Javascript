"use strict";

const book = {
    mainTitle: "Main title",
    author: "Author name",
};

console.log(book.author);
console.log(book["author"]);

book.author = "New author";
console.log(book);

book["author"] = "Another author";
console.log(book);

// Example
const portifolio = {
    stock1: 100,
    stock2: 200,
    stock3: 300,
};

const computeValue = function (obj) {
    let total = 0.0;

    for (let prop in obj) {
        const value = obj[prop];

        if (!Number.isFinite(value)) continue;

        total += value;
    }

    return total;
};

console.log(`Total: ${computeValue(portifolio)}`);
