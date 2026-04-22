"use strict";

import books from "../Data/data.js";

// Exercise 1: Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// Regex:
// \b = word boundary (ensures “java” stands alone)
// java = the word you’re matching
// i = case-insensitive flag (matches “Java”, “JAVA”, etc.)

const hasExamplesInJava = function (book) {
    if (book == null || typeof book !== "object" || Array.isArray(book)) return;

    const content = book?.programmingLanguage;

    if (content == null || typeof content !== "string") return;

    const regex = /\bjava\b/i;

    const hasJavaBook = regex.test(content) || "no data available";

    console.log(hasJavaBook);
};

hasExamplesInJava(books[0]);
hasExamplesInJava(books[1]);
hasExamplesInJava(books[3]);

// Exercise 2: Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

for (const book of books) {
    book.onlineContent === true &&
        console.log(`${book.title} provides online content.`);
}
