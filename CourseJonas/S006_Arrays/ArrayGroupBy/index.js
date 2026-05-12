"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupMovements = Object.groupBy(movements, (movement) => (movement > 0 ? "deposits" : "withdrawals"));

console.log(groupMovements);
console.log("\n");

const people = [
    {
        firstName: "diego",
        lastName: "alexander",
        age: 38,
    },
    {
        firstName: "amanda",
        lastName: "perna",
        age: 33,
    },
    {
        firstName: "eduarda",
        lastName: "perna",
        age: 5,
    },
];

const groupPeople = Object.groupBy(people, (person) => (person.age < 18 ? "teenager" : "adult"));

console.log(groupPeople);
