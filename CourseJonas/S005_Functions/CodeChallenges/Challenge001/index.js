"use strict";

const btn = document.querySelector(".poll");

const poll = {
    question: "What is your favorite programming language?",
    options: ["0: Javascript", "1: Python", "2: C#", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        const answer = Number(
            window.prompt(
                `${this.question}\n${this.options.join("\n")}\n(Write option number)`,
            ),
        );

        if (
            !(
                Number.isFinite(answer) &&
                answer >= 0 &&
                answer < this.options.length
            )
        ) {
            window.alert("Invalid answer");
            return;
        }

        this.answers[answer]++;

        this.displayResults();
    },
    displayResults: function (type = "array") {
        if (typeof type !== "string") return;

        switch (type.toLowerCase()) {
            case "string":
                console.log(`Poll results are ${this.answers.join(", ")}.`);
                break;
            case "array":
                console.log(this.answers);
                break;
            default:
                break;
        }
    },
};

btn.addEventListener("click", poll.registerNewAnswer.bind(poll));

const objTest1 = {
    answers: [5, 2, 3],
};

const objTest2 = {
    answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(objTest1);
poll.displayResults.call(objTest1, "string");

poll.displayResults.call(objTest2);
poll.displayResults.call(objTest2, "string");
