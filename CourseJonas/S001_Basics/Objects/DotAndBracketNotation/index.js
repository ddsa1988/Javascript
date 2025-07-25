"use strict";

const diego = {
    firstName: "Diego",
    lastName: "Alexander",
    birthdate: new Date(1988, 0, 22),
    job: "programmer",
    isMarried: true,
};

console.log(diego.firstName);
console.log(diego["firstName"]);

{
    const key = "job";

    if (diego[key] != null) {
        console.log(diego[key]);
    } else {
        console.log("Invalid property access.");
    }
}

const key = "jobs";

if (diego[key] != null) {
    console.log(diego[key]);
} else {
    console.log("Invalid property access.");
}

diego.country = "Brazil";
diego["nativeLanguage"] = "Portuguese";

console.log(diego);
