"use strict";

{
    const names = ["Jonas", "Zach", "adam", "Martha", "Adam"];
    names.sort();

    console.log(names);
}

console.log();

{
    const names = ["Jonas", "Zach", "adam", "Martha", "Adam"];
    const namesSorted = names.toSorted();

    console.log(names);
    console.log(namesSorted);
}

console.log();

{
    const numbers = [200, 450, -400, 3000, -650, -130, 70, 1300];
    numbers.sort();

    console.log(numbers);
}

console.log();

{
    const numbers = [200, 450, -400, 3000, -650, -130, 70, 1300];
    numbers.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
    });

    console.log(numbers);
}

console.log();

{
    const numbers = [200, 450, -400, 3000, -650, -130, 70, 1300];
    numbers.sort((a, b) => a - b);

    console.log(numbers);
}
