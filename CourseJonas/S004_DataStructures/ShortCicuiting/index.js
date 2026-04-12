"use strict";

// OR
console.log(undefined || "", null);
console.log(undefined || null || "Hello" || 3);
console.log(3 || "Hello");
console.log();

// AND
console.log(undefined && "" && null);
console.log(3 && "Hello" && null && 10);
