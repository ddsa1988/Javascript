"use strict";

console.log("Primitive type Object\n");

const arr = [0, 1, 2, 3, 4, 5];
const obj = {
    firstName: "Diego",
    lastName: "Alexander",
    birthdate: new Date(1988, 0, 22),
};

console.log("arr: " + arr);
console.log("Type of 'arr': " + typeof arr + "\n");

console.log("obj: ");
console.log(obj);
console.log("Type of 'obj': " + typeof obj + "\n");

console.log("obj.birthdate: " + obj.birthdate.toLocaleString("pt-BR"));
console.log("Type of 'obj.birthdate': " + typeof obj.birthdate + "\n");
