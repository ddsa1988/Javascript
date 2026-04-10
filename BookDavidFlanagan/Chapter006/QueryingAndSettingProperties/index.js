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
