"use strict";

{
    const greeting = () => "Hello World.";
    console.log(greeting());
}

console.log();

{
    const greeting = (msg) => `Hello World, ${msg}.`;
    console.log(greeting("Brazil"));
}

console.log();

{
    const greeting = (msg) => {
        return `Hello World, ${msg}.`;
    };

    console.log(greeting("Brazil"));
}
