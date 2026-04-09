"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

{
    const { name, openingHours, categories } = restaurant;
    console.log(name);
    console.log(openingHours);
    console.log(categories);
}

console.log();

{
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu);
    console.log(starters);
}

console.log();

{
    let x = 100;
    let y = 150;

    const obj = { a: 10, b: 7, c: 14 };

    ({ a: x, b: y } = obj);

    console.log(x);
    console.log(y);
}
