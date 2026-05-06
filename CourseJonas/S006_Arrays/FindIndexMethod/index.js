"use strict";

const names = ["Diego", "Amanda", "Eduarda"];

{
    const index = names.findIndex((name) => name.toLowerCase() === "amanda");
    console.log(index);
}

{
    const index = names.findIndex((name) => name.toLowerCase() === "jonas");
    console.log(index);
}
