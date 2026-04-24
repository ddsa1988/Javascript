"use strict";

{
    const greet = function (greeting) {
        return function (name) {
            console.log(greeting + " " + name);
        };
    };

    const greeter = greet("Hello");

    greeter("Diego");
    greet("Good morning")("Amanda");
}

console.log();

{
    const greet = (greeting) => (name) => console.log(greeting + " " + name);

    const greeter = greet("Hello");

    greeter("Diego");
    greet("Good morning")("Amanda");
}
