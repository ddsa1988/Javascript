"use strict";

const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");

const increment = function () {
    let count = Number(countEl.textContent);

    if (!Number.isFinite(count)) {
        return;
    }

    count += 1;

    countEl.textContent = count;
};

const save = function () {
    let count = Number(countEl.innerText);

    if (!Number.isFinite(count) || count == 0) {
        return;
    }

    if (saveEl.textContent === "") {
        saveEl.textContent = "Previous entries:";
    }

    saveEl.textContent += ` ${count} -`;
    countEl.textContent = 0;
};

incrementBtn.addEventListener("click", increment);

saveBtn.addEventListener("click", save);
