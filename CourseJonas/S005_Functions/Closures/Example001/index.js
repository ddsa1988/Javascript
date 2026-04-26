"use strict";

const getCounter = function (initialValue) {
    const init = initialValue;
    let counter = initialValue;

    return {
        increment() {
            counter++;
        },
        decrement() {
            counter--;
        },
        reset() {
            counter = init;
        },
        value() {
            return counter;
        },
    };
};

const counter = getCounter(10);

counter.increment();
counter.increment();
console.log(counter.value());

counter.reset();
counter.decrement();
console.log(counter.value());

console.dir(counter);
