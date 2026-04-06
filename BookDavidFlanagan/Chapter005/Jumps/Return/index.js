"use strict";

for (let i = 0; i < 3; i++) {
    if (i === 1) return;
    console.log(`Value of i: ${i}`);
}

console.log("This line will never be reached");
