"use strict";

const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const previousEntries = document.getElementById("previous-entries");

const increment = function () {
    let count = Number(countEl.innerText);

    if (!Number.isFinite(count)) {
        return;
    }

    count += 1;

    countEl.innerText = count;
};

const save = function () {
    let count = Number(countEl.innerText);

    if (!Number.isFinite(count) || count == 0) {
        return;
    }

    if (previousEntries.innerText === "") {
        previousEntries.innerText = "Previous entries:";
    }

    previousEntries.innerText += ` ${count} -`;
    countEl.innerText = 0;
};

incrementBtn.addEventListener("click", increment);

saveBtn.addEventListener("click", save);
