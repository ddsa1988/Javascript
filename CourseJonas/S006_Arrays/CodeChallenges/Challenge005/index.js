"use strict";

const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

for (const dog of dogs) {
    const recommendedFood = dog.weight ** 0.75 * 28;
    dog["recommendedFood"] = Number(recommendedFood.toFixed(2));
}

console.log(dogs);
console.log();

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const isFoodAmountGood = function (currentFood, recommendedFood) {
    if (!Number.isFinite(currentFood)) return false;
    if (!Number.isFinite(recommendedFood)) return false;

    const percentage = Number((recommendedFood * (10 / 100)).toFixed(2));
    const minRange = Number((recommendedFood - percentage).toFixed(2));
    const maxRange = Number((recommendedFood + percentage).toFixed(2));

    return currentFood >= minRange && currentFood <= maxRange;
};

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog);
console.log(isFoodAmountGood(sarahDog.curFood, sarahDog.recommendedFood));
