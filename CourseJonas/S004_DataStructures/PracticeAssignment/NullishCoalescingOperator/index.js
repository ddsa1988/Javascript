"use strict";

import books from "../Data/data.js";

// Exercise 1: There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (const book of books) {
    book.onlineContent ??
        console.log(`${book.title} provides no data about its online content.`);
}
