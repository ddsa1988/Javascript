"use strict";

import books from "../Data/data.js";

// Exercise 1: Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

const getFirstKeyword = function (book) {
    console.log(book.keywords?.[0]);
};

const newBook = {
    title: "The C Programming Language",
    author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
};

getFirstKeyword(books[0]);
getFirstKeyword(newBook);
