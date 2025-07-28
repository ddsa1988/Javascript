"use strict";

{
    const numberStr = "20";
    const n1 = Number(numberStr);
    const n2 = parseInt(numberStr);

    console.log("n1 => " + n1);
    console.log("n2 => " + n2);
}

console.log();

{
    const numberStr = "20_Test";
    const n1 = Number(numberStr);
    const n2 = parseInt(numberStr);

    console.log("n1 => " + n1);
    console.log("n2 => " + n2);
}

console.log();

{
    const numberStr = "Test_20";
    const n1 = Number(numberStr);
    const n2 = parseInt(numberStr);

    console.log("n1 => " + n1);
    console.log("n2 => " + n2);
}

console.log();

{
    const numberStr = "2_Test_0";
    const n1 = Number(numberStr);
    const n2 = parseInt(numberStr);

    console.log("n1 => " + n1);
    console.log("n2 => " + n2);
}
