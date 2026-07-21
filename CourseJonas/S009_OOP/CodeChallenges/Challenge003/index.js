"use strict";

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;

    console.log(`The car speed is ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
    this.speed = this.speed > 0 ? this.speed - 5 : this.speed;

    console.log(`The car speed is ${this.speed} km/h.`);
};

const ElectricCar = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

ElectricCar.prototype = Object.create(Car);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;

    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

ElectricCar.prototype.chargeBattery = function (chargeTo) {
    if (!(Number.isFinite(chargeTo) && chargeTo > 0)) return;

    this.charge = chargeTo;
};

const tesla = new ElectricCar("Tesla", 100, 24);
tesla.accelerate();

tesla.chargeBattery(50);
console.log(tesla);
