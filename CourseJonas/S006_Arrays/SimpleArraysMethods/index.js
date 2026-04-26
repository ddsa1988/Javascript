"use strict";

{
    const arr = ["a", "b", "c", "d", "e"];

    console.log(arr.slice(2));
    console.log(arr.slice(2, 4));
    console.log(arr.slice(-4));
    console.log(arr);
}

console.log();

{
    const arr = ["a", "b", "c", "d", "e"];

    console.log(arr.splice(2, 1));
    console.log(arr);
}

console.log();

{
    const arr = ["a", "b", "c", "d", "e"];

    console.log(arr.reverse());
}

console.log();

{
    const arr = ["a", "b", "c", "d", "e"];
    const arr1 = ["y", "z", "w"];

    console.log(arr.concat(arr1));
}

console.log();

{
    const arr = ["a", "b", "c", "d", "e"];

    console.log(arr.join(", "));
}
