"use strict";

const startTimer = function () {
    let counter = 0;

    const timer = setInterval(() => {
        console.clear();
        console.log(counter++);

        if (counter > 10) {
            clearInterval(timer);
        }
    }, 1000);
};

startTimer();
