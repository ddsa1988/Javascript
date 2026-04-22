"use strict";

// Exercise 1: Using computed properties, fill the newBook object with the properties and values from the bookData array.

const bookData = [
    ["title", "Computer Networking: A Top-Down Approach"],
    ["author", ["James F. Kurose", "Keith W. Ross"]],
    ["publisher", "Addison Wesley"],
];

const newBook = {};

for (const book of bookData) {
    if (book.length !== 2) continue;

    newBook[book[0]] = book[1];
}

console.log(newBook);

// Exercise 2: Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

const pages = 880;

const newBook2 = {
    title: "The C Programming Language",
    author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
    pages,
};

console.log(newBook2);
