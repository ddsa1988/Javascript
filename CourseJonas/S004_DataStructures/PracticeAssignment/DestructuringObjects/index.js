"use strict";

import books from "../Data/data.js";

// Exercise 1: Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0];

console.log(`Title: ${title}\nAuthor: ${author}\nISBN: ${ISBN}`);

// Exercise 2: Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tags } = books[0];

console.log(`Tags: ${tags}`);

// Exercise 3: The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programmingLanguage = "unknown" } = books[6];

console.log(
    `Language: ${language}\nProgramming language: ${programmingLanguage}`,
);

// Exercise 4: Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(`Book title: ${bookTitle}\nBook author: ${bookAuthor}`);

// Exercise 5: Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

const {
    thirdParty: {
        goodreads: { rating: bookRating },
    },
} = books[0];

console.log(`Rating: ${bookRating}`);

// Exercise 6: Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

const printBookInfo = function (obj) {
    if (obj == null || typeof obj !== "object" || Array.isArray(obj)) return;

    const { title, author, year = "year unknown" } = obj;

    console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
    title: "Algorithms",
    author: "Robert Sedgewick",
    year: "2011",
});

printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
