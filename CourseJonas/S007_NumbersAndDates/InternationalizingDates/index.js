"use strict";

const now = new Date();
const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long", // Can be 'numeric'
    year: "numeric",
    weekday: "long",
};

const dateFormattedPtBr = new Intl.DateTimeFormat("pt-BR", options).format(now);
console.log(dateFormattedPtBr);

const dateFormattedEnUs = new Intl.DateTimeFormat("en-US", options).format(now);
console.log(dateFormattedEnUs);
