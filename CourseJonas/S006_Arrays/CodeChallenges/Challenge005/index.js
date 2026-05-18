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

const FoodAmountComparer = function (currentFood, recommendedFood) {
    /**
     * Calculates if the current food is the correct portion
     * @param {number} currentFood - The current food portion
     * @param {number} recommendedFood - The recommended portion of food
     * @returns {number} - To much = 1; Too little = -1; Normal = 0
     */

    if (!Number.isFinite(currentFood)) return false;
    if (!Number.isFinite(recommendedFood)) return false;

    const percentage = Number((recommendedFood * (10 / 100)).toFixed(2));
    const minRange = Number((recommendedFood - percentage).toFixed(2));
    const maxRange = Number((recommendedFood + percentage).toFixed(2));

    if (currentFood > maxRange) return 1;
    if (currentFood < minRange) return -1;

    return 0;
};

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
const resultValue = FoodAmountComparer(sarahDog.curFood, sarahDog.recommendedFood);
const resultStr = resultValue === 1 ? "too much" : resultValue === -1 ? "too little" : "normal";

console.log(`Sarah's dog it's eating ${resultStr}.`);
console.log();

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle')

const result = FoodAmountComparer(340, 376.72);

const dogsEatTooMuch = dogs.filter((dog) => FoodAmountComparer(dog.curFood, dog.recommendedFood) === 1);
const dogsEatTooLittle = dogs.filter((dog) => FoodAmountComparer(dog.curFood, dog.recommendedFood) === -1);

console.log(dogsEatTooMuch);
console.log();

console.log(dogsEatTooLittle);
console.log();

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

const ownersNamesDogsEatTooMuch = dogsEatTooMuch.map((dog) => dog.owners).flat();
console.log(`${ownersNamesDogsEatTooMuch.join(" and ")} dogs eat too much!\n`);

const ownersNamesDogsEatTooLittle = dogsEatTooLittle.map((dog) => dog.owners).flat();
console.log(`${ownersNamesDogsEatTooLittle.join(" and ")} dogs eat too little!\n`);

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

const isAnyDogEatingExactly = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(isAnyDogEatingExactly);
console.log();

// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)

const isAnyDogEatingOkay = dogs.some((dog) => FoodAmountComparer(dog.curFood, dog.recommendedFood) === 0);
console.log(isAnyDogEatingOkay);
console.log();

// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)

const dogsEatingOkay = dogs.filter((dog) => FoodAmountComparer(dog.curFood, dog.recommendedFood) === 0);
console.log(dogsEatingOkay);
console.log();

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

const dogsCopy = Array.from(dogs);

dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);
console.log();

// 9. Group the dogs by the recommended food

const dogsGroupedByPortion = Object.groupBy(dogs, (dog) => {
    const result = FoodAmountComparer(dog.curFood, dog.recommendedFood);
    if (result === 1) {
        return "too-much";
    }

    if (result === -1) {
        return "too-little";
    }

    return "exact";
});

console.log(dogsGroupedByPortion);
