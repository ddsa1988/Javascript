"use strict";

import books from "../Data/data.js";

// Exercise 1: Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8.

const isbn = books[0].ISBN;

console.log(
    `ISBN index 6: ${isbn[6]}\nISBN index 4: ${isbn[4]}\nISBN index 9: ${isbn[9]}\nISBN index 8: ${isbn[8]}`,
);

// Exercise 2: Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

const quote =
    "A computer once beat me at chess, but it was no match for me at kick boxing";
const indexOfChess = quote.indexOf("chess");

console.log(`Index of chess: ${indexOfChess}`);

// Exercise 3: Extract the word "boxing" from the same quote string, and log it to the console.

const boxing = "boxing";
const indexOfBoxing = quote.indexOf(boxing);

console.log(quote.slice(indexOfBoxing, indexOfBoxing + boxing.length));

// Exercise 4: Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

const isContributor = function (author) {
    if (typeof author !== "string") return false;

    return author.toLowerCase().includes("(contributor)");
};

console.log(isContributor("Julie Sussman (Contributor)"));
console.log(isContributor("Robert Sedgewick"));
