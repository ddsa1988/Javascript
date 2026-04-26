"use strict";

(function () {
    console.log("This will never run again.");
})();

(() => console.log("This will never run again."))();

const number = (function () {
    return 10;
})();

console.log(number);
