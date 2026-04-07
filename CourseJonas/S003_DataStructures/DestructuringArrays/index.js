"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

{
    const [first, second] = restaurant.categories;
    console.log(first, second);
}

{
    const [first, , , last] = restaurant.categories;
    console.log(first, last);
}

{
    const [first, second] = restaurant.order(2, 0);
    console.log(first, second);
}

{
    const nested = [2, 4, [5, 6]];
    const [first, , second] = nested;
    console.log(first, second);
}
