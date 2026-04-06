"use strict";

// The 'this' keyword is not static. It depends on how the function is called, and its value is only assigned when the function is actually called. So we cannot know the value of 'this' just by looking at the function itself. It will be determined at runtime based on the context in which the function is invoked.

// In the global scope, 'this' refers to the global object (window in browsers).
// In a regular function, 'this' will be undefined in strict mode, and will refer to the global object in non-strict mode.
// In an object method, 'this' refers to the object that the method is called on.
// In an arrow function, 'this' is lexically bound, meaning it takes the value of 'this' from the surrounding code at the time the arrow function is defined.

console.log(this); // In the global scope, 'this' refers to the global object (window in browsers).

const regularFunction = function () {
    console.log(this); // In a regular function, 'this' will be undefined in strict mode, and will refer to the global object in non-strict mode.
};

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

const anotherObj = {
    anotherObjProperty: "I am another object property",
    method: obj.method,
};

anotherObj.method(); // 'this' will refer to 'anotherObj' because the method is called on 'anotherObj'.

const diego = {
    name: "Diego",

    method() {
        const greet1 = function () {
            console.log(this); // 'this' will be undefined in strict mode, and will refer to the global object in non-strict mode, because 'greet1' is a regular function and is called without an object context.
        };

        greet1();

        const greet2 = () => {
            console.log(this); // 'this' will refer to 'diego' because 'greet2' is an arrow function and takes 'this' from the surrounding context, which is the 'method' function where 'this' refers to 'diego'.
        };

        greet2();
    },
};

diego.method();
