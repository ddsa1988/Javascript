"use strict";

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;

        console.log(`The car speed is ${this.speed} km/h.`);
    }

    brake() {
        this.speed = this.speed > 0 ? this.speed - 5 : this.speed;

        console.log(`The car speed is ${this.speed} km/h.`);
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(value) {
        if (value < 0) return;

        this.speed = value * 1.6;
    }
}

const bmw = new Car("BMW", 100);
const mercedes = new Car("Mercedes", 80);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

console.log(bmw.speedUs);
console.log(mercedes.speedUs);

bmw.speedUs = 50;
mercedes.speedUs = 100;

console.log(bmw);
console.log(mercedes);
