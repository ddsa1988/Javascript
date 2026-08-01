"use strict";

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;

        console.log(`The car speed is ${this.speed} km/h.`);

        return this;
    }

    brake() {
        this.speed = this.speed > 0 ? this.speed - 5 : this.speed;

        console.log(`The car speed is ${this.speed} km/h.`);

        return this;
    }
}

class ElectricCar extends Car {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;

        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);

        return this;
    }

    chargeBattery(chargeTo) {
        if (!(Number.isFinite(chargeTo) && chargeTo > 0)) return;

        this.#charge = chargeTo;

        return this;
    }
}

const tesla = new ElectricCar("Tesla", 100, 24);

tesla.accelerate().chargeBattery(50).brake().accelerate();

console.log(tesla);
