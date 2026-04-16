"use strict";

{
    const map = new Map();
    map.set("firstName", "Diego");
    map.set("lastName", "Alexander");

    console.log(map.has("lastName"));
    console.log(map.get("firstName"));

    for (const [key, value] of map) {
        console.log(`key = ${key}, value = ${value}`);
    }
}

console.log();

{
    const map = new Map([
        [1, "Diego"],
        [2, "Alexander"],
    ]);

    console.log(map.has(2));
    console.log(map.get(1));

    for (const [key, value] of map) {
        console.log(`key = ${key}, value = ${value}`);
    }
}

console.log();

{
    const map = new Map();
    map.set(true, "Diego");
    map.set(false, "Alexander");

    console.log(map.has(false));
    console.log(map.get(true));

    for (const [key, value] of map) {
        console.log(`key = ${key}, value = ${value}`);
    }
}
