"use strict";

{
    const arr = [7, 8, 9];
    const newArray = [1, 2, 3, ...arr];

    console.log(newArray);
    console.log(...newArray);
}

console.log();

{
    // Shallow copy
    const arr = [1, 2, 3];
    const newArray = [...arr];

    newArray.push(10);

    console.log(arr);
    console.log(newArray);
}

console.log();

{
    // Join arrays
    const arr1 = [1, 2, 3];
    const arr2 = [7, 8, 9];
    const newArray = [...arr1, ...arr2];

    console.log(newArray);
}

console.log();

{
    // Shallow copy
    const obj = { fistName: "Diego", lastName: "Alexander" };
    const newObj = { ...obj };

    newObj.lastName = "Santos";

    console.log(obj);
    console.log(newObj);
}

console.log();

{
    // Join objects
    const obj1 = { fistName: "Diego" };
    const obj2 = { myNumber: 10 };
    const newObj = { ...obj1, ...obj2 };
    console.log(newObj);
}

console.log();

{
    const str = "Diego";
    const letters = [...str];
    console.log(letters);
}

console.log();

{
    const sum = function (num1, num2) {
        return num1 + num2;
    };

    const numbers = [10, 20, 30];
    console.log(sum(...numbers));
}
