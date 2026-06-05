"use strict";

// Selecting elements

console.log(document.documentElement);
console.log();

console.log(document.body);
console.log();

console.log(document.querySelector(".main"));
console.log();

console.log(document.querySelectorAll(".btn"));
console.log();

console.log(document.getElementById("btn-1"));
console.log();

console.log(document.getElementsByTagName("button"));
console.log();

console.log(document.getElementsByClassName("btn"));
console.log();

// Creating elements

const main = document.querySelector(".main");
const div = document.createElement("div");
const paragraph = document.createElement("p");

paragraph.textContent = "This is a new paragraph.";

div.append(paragraph);
main.prepend(div);

// main.before(div);
// main.after(div);

// Deleting elements

const btn3 = document.querySelector("#btn-3");

btn3.remove();

// btn3.parentElement.removeChild(btn3);
// main.removeChild(btn3);
