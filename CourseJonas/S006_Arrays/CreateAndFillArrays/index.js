"use strict";

{
    const arr = new Array(10);

    console.log(arr);

    arr.fill(1);

    console.log(arr);
}

console.log();

{
    const arr = Array.from({ length: 10 }, () => 1);
    console.log(arr);
}

console.log();

{
    const arr = Array.from({ length: 7 }, (current, index) => index + 1);
    console.log(arr);
}
