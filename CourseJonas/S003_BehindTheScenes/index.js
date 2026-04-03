"use strict";

// The 'this' keyword is not static. It depends on how the function is called, and its value is only assigned when the function is actually called. So we cannot know the value of 'this' just by looking at the function itself. It will be determined at runtime based on the context in which the function is invoked.

// In the global scope, 'this' refers to the global object (window in browsers).
// In a regular function, 'this' will be undefined in strict mode, and will refer to the global object in non-strict mode.
// In an object method, 'this' refers to the object that the method is called on.
// In an arrow function, 'this' is lexically bound, meaning it takes the value of 'this' from the surrounding code at the time the arrow function is defined.

console.log(this); // In the global scope, 'this' refers to the global object (window in browsers).

function regularFunction() {
    console.log(this); // In a regular function, 'this' will be undefined in strict mode, and will refer to the global object in non-strict mode.
}

regularFunction();

const obj = {
    objectProperty: "I am an object property",
    method() {
        console.log(this); // In an object method, 'this' refers to the object that the method is called on.
    },
    arrowFunction: () => {
        console.log(this); // In an arrow function, 'this' is lexically bound, meaning it takes the value of 'this' from the surrounding code at the time the arrow function is defined.
    },
};

obj.method();
obj.arrowFunction();
