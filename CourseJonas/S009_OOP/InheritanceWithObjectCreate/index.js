"use strict";

const PersonProto = {
    firstName: undefined,
    birthdate: undefined,

    init: function (firstName, birthdate) {
        this.firstName = firstName;
        this.birthdate = birthdate;
    },

    getAge: function () {
        const now = new Date();
        const timeDiff = now - this.birthdate;

        if (timeDiff < 0) return 0;

        const age = new Date(timeDiff).getFullYear() - 1970;

        return Number.isFinite(age) ? age : 0;
    },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthdate, course) {
    PersonProto.init.call(this, firstName, birthdate);
    this.course = course;
};

StudentProto.getGreeting = function () {
    return `My name is ${this.firstName} and I study ${this.course}.`;
};

const diego = Object.create(StudentProto);

diego.init("Diego", new Date(1988, 0, 22), "Software Engineering");

console.log(diego.getAge());
console.log(diego.getGreeting());
