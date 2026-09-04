"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
    const timeout = 2000;

    console.log("Lottery draw is happening.");

    setTimeout(() => {
        const randomValue = Math.random();

        if (randomValue >= 0.5) {
            resolve("You've won!!!");
        } else {
            reject(new Error("You've lost your money..."));
        }
    }, timeout);
});

lotteryPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log("I've waited for two seconds.");

        return wait(3);
    })
    .then(() => {
        console.log("I've waited for three seconds.");
    });
