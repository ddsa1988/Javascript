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

// Exercise 8: Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

const logBookCategories = function (content) {
    if (typeof content !== "string") return;

    const categories = content.split(";");

    for (const category of categories) {
        console.log(category);
    }
};

const bookCategories =
    "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

logBookCategories(bookCategories);

// Exercise 9: rite a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

const getKeywordsAsString = function (arr) {
    if (!Array.isArray(arr)) return;

    const keywords = [];

    for (const book of books) {
        keywords.push(...book.keywords);
    }

    const uniqueKeywords = [...new Set(keywords)];

    return uniqueKeywords.join("; ");
};

console.log(getKeywordsAsString(books));

// Exercise 10: Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number.

const logBookChapters = function (arr) {
    if (!Array.isArray(arr)) return;

    for (const [chapter, pages] of arr) {
        console.log(`${chapter.padEnd(20, "_")} ${pages}`);
    }
};

const bookChapters = [
    ["The Basics", 14],
    ["Sorting", 254],
    ["Searching", 372],
    ["Graphs", 526],
    ["Strings", 706],
];

logBookChapters(bookChapters);
