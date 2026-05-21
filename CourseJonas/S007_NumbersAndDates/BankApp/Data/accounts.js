"use strict";

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [
        { amount: 200, date: "2019-11-18T21:31:17.178Z" },
        { amount: 455.23, date: "2019-12-23T07:42:02.383Z" },
        { amount: -306.5, date: "2020-01-28T09:15:04.904Z" },
        { amount: 25000, date: "2020-04-01T10:17:24.185Z" },
        { amount: -642.21, date: "2020-05-08T14:11:59.604Z" },
        { amount: -133.9, date: "2020-05-27T17:01:17.194Z" },
        { amount: 79.97, date: "2020-07-11T23:36:17.929Z" },
        { amount: 1300, date: "2020-07-12T10:51:36.790Z" },
    ],
    interestRate: 1.2, // %
    pin: 1111,
    currency: "EUR",
    locale: "pt-PT",
};

const account2 = {
    owner: "Jessica Davis",
    movements: [
        { amount: 5000, date: "2019-11-01T13:15:33.035Z" },
        { amount: 3400, date: "2019-11-30T09:48:16.867Z" },
        { amount: -150, date: "2019-12-25T06:04:23.907Z" },
        { amount: -790, date: "2020-01-25T14:18:46.235Z" },
        { amount: -3210, date: "2020-02-05T16:33:06.386Z" },
        { amount: -1000, date: "2020-04-10T14:43:26.374Z" },
        { amount: 8500, date: "2020-06-25T18:49:59.371Z" },
        { amount: -30, date: "2020-07-26T12:01:20.894Z" },
    ],
    interestRate: 1.5, // %
    pin: 2222,
    currency: "USD",
    locale: "en-US",
};

const accounts = [account1, account2];

export default accounts;
