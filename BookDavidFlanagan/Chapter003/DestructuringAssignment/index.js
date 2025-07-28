"use strict";

{
    const a = 10;
    const b = 20;
    const [x, y] = [a, b];

    console.log("x => " + x);
    console.log("y => " + y);
}

console.log();

{
    const numbers = [100, 200, 300];
    const [hundred, ...rest] = numbers;

    console.log("hundred => " + hundred);
    console.log("rest => " + rest);
}

console.log();

{
    const obj = {
        x: 10,
        y: 20,
    };

    const { x, y } = obj;
    console.log("x => " + x);
    console.log("y => " + y);
}

console.log();

{
    const obj = {
        a: 10,
        b: 20,
    };

    const { a: x, b: y } = obj;
    console.log("x => " + x);
    console.log("y => " + y);
}
