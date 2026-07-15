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

const diego = Object.create(PersonProto);

console.log(diego.__proto__);
console.log(diego.__proto__ === PersonProto);
