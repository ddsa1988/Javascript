"use strict";

const myTimer = setInterval(() => {
    const now = new Date();
    console.clear();
    console.log(now.toLocaleTimeString());
}, 1000);
