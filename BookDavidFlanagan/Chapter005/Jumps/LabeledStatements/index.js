"use strict";

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1) continue outer;
        console.log(`Value at coords (${i},${j})`);
    }
}
