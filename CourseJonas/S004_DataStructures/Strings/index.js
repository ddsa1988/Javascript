"use strict";

const myName = "Diego Alexander";

console.log(myName.indexOf("e"));
console.log(myName.lastIndexOf("e"));

const firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

const lastName = myName.slice(0, myName.lastIndexOf("e"));
console.log(lastName);
