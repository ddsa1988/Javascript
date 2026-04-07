"use strict";

import books from "../Data/data.js";

// Exercise 1: Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books;
console.log(firstBook.title);
console.log(secondBook.title);

// Exercise 2: Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;
console.log(thirdBook.title);

// Exercise 3: Destructure the nested array
const ratings = [
    ["rating", 4.19],
    ["ratingCount", 144584],
];

const [[, rating], [, ratingCount]] = ratings;
console.log(rating);
console.log(ratingCount);

// Exercise 4: Destructure the array and assign default values
const ratingStars = [63405, 1808];
const [fiveStarRating, oneStarRating, threeStarRating = 0] = ratingStars;
console.log(fiveStarRating);
console.log(oneStarRating);
console.log(threeStarRating);
