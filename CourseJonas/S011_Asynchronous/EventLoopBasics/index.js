"use strict";

// Event loop execution order:
// Synchronous Code => Micro-Task Queue => Macro-Task Queue

console.log("Start testing..."); // Synchronous code - Runs first

setTimeout(() => {
    console.log("0 second timer.");
}, 0); // Macro-Task Queue (Asynchronous) - Low priority

Promise.resolve("Resolved promise 1.").then((response) => console.log(response)); // Micro-Task Queue (Asynchronous) - high priority

Promise.resolve("Resolved promise 2.").then((response) => {
    let myString = "";

    for (let i = 0; i < 40000000; i++) {
        myString += i.toString();
    }

    console.log(response);
});

console.log("Test finished!"); // Synchronous code - Runs first
