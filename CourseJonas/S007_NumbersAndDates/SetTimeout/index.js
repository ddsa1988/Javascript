"use strict";

const myTimer = setTimeout(
    (text) => console.log(`This is inside set timeout function.\n${text}`),
    5000,
    "This is a text.",
);

console.log("Started.");
