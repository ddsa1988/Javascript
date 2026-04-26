"use strict";

let f;

const g = function () {
    const a = 10;

    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 20;

    f = function () {
        console.log(b * 3);
    };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);
