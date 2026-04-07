"use strict";

{
    const points = {};
    console.log(points);
}

{
    const points = { x: 10, y: 20 };
    console.log(points);
}

{
    const points = new Object();
    console.log(points);
}

{
    const points = new Object({ x: 10, y: 20 });
    console.log(points);
}

{
    // Object.create creates a new object using an existing object
    const points = { x: 10, y: 20 };
    const newPoints = Object.create(points);

    console.log(`{ x: ${newPoints.x}, y: ${newPoints.y} }`);
    console.log();
}
