"use strict";

import books from "../Data/data.js";

// Exercise 1: Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const {
    keywords: [mainKeyword, ...rest],
} = books[0];

console.log(`Main keyword: ${mainKeyword}\nRest: ${rest}`);

// Exercise 2: Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

console.log(`Book publisher: ${bookPublisher}`);

// Exercise 3: Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

const printBookAuthorsCount = function (title, ...authors) {
    if (typeof title !== "string" || authors.length === 0) return;

    console.log(`The book ${title} has ${authors.length} authors.`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
