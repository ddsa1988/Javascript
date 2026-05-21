"use strict";

import Movement from "../Models/movement.js";

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [
        new Movement(200, "2019-11-18T21:31:17.178Z"),
        new Movement(455.23, "2019-12-23T07:42:02.383Z"),
        new Movement(-306.5, "2020-01-28T09:15:04.904Z"),
        new Movement(25000, "2020-04-01T10:17:24.185Z"),
        new Movement(-642.21, "2020-05-08T14:11:59.604Z"),
        new Movement(-133.9, "2020-05-27T17:01:17.194Z"),
        new Movement(79.97, "2020-07-11T23:36:17.929Z"),
        new Movement(1300, "2020-07-12T10:51:36.790Z"),
    ],
    interestRate: 1.2, // %
    pin: 1111,
    currency: "EUR",
    locale: "pt-PT",
};

const account2 = {
    owner: "Jessica Davis",
    movements: [
        new Movement(5000, "2019-11-01T13:15:33.035Z"),
        new Movement(3400, "2019-11-30T09:48:16.867Z"),
        new Movement(-150, "2019-12-25T06:04:23.907Z"),
        new Movement(-790, "2020-01-25T14:18:46.235Z"),
        new Movement(-3210, "2020-02-05T16:33:06.386Z"),
        new Movement(-1000, "2020-04-10T14:43:26.374Z"),
        new Movement(8500, "2020-06-25T18:49:59.371Z"),
        new Movement(-30, "2020-07-26T12:01:20.894Z"),
    ],
    interestRate: 1.5, // %
    pin: 2222,
    currency: "USD",
    locale: "en-US",
};

const accounts = [account1, account2];

export default accounts;
