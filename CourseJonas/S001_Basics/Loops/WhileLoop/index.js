"use strict";

let i = 0;
let text = "";

while (i < 10) {
    text = text.concat(i, " ");
    i++;
}

console.log(text + "\n");

i = 0;

while (true) {
    if (i >= 3) {
        break;
    }

    console.log(i);
    i++;
}
