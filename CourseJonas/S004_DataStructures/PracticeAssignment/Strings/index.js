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

// Exercise 5: Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

const normalizeAuthorName = function (author) {
    if (typeof author !== "string") return "";

    const fullNameArr = author
        .toLowerCase()
        .replace("(contributor)", "")
        .trim()
        .split(" ");

    let normalizeName = "";

    for (const name of fullNameArr) {
        if (name.length === 0) continue;

        normalizeName = normalizeName.concat(
            name[0].toUpperCase(),
            name.slice(1),
            " ",
        );
    }

    return normalizeName;
};

console.log(normalizeAuthorName("  JuliE sussMan (Contributor) Alex"));

// Exercise 6: Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

const bookTitle = books[1].title;
const newBookTitle = bookTitle.replace("Programs", "Software");

console.log(newBookTitle);

// Exercise 7: Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer", "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words, and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

const logBookTheme = function (bookTitle) {
    if (typeof bookTitle !== "string") return;

    const title = bookTitle.trim().toLowerCase();

    if (title.startsWith("computer")) {
        console.log("This book is about computers.");
        return;
    }

    if (title.includes("algorithms") && title.includes("structures")) {
        console.log("This book is about algorithms and data structures.");
        return;
    }

    if (
        (title.endsWith("system") || title.endsWith("systems")) &&
        !title.includes("operating")
    ) {
        console.log(
            "This book is about some systems, but definitely not about operating systems.",
        );
    }
};
