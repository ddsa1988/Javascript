"use strict";

import books from "../Data/data.js";

// Exercise 1: Create a new book, but this time, as a Map. Assign it to the bookMap variable.

const arr = [
    ["title", "Clean Code"],
    ["author", "Robert C. Martin"],
];

const bookMap = new Map(arr);
console.log(bookMap);

// Exercise 2: Set a new key in bookMap called pages, and assign it with a number 464.

bookMap.set("pages", 464);

// Exercise 3: Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

const title = bookMap.get("title");
const author = bookMap.get("author");

console.log(`${title} by ${author}`);

// Exercise 4: Get the size of bookMap, and log it to the console.

const size = bookMap.size;

console.log(`The bookMap size is ${size}`);

// Exercise 5: Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

bookMap.has("author") && console.log("The author of the book is known.");

// Exercise 6: Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(books[0]));

console.log(firstBookMap);

// Exercise 7: Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap.entries()) {
    if (typeof value !== "number") continue;
    console.log(key);
}
