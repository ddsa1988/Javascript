"use strict";

const purchaseBtn = document.getElementById("purchase-btn");
const errorMsg = document.getElementById("error-msg");

const purchase = function () {
    errorMsg.textContent = "Something went wrong, please try again!";
};

purchaseBtn.addEventListener("click", purchase);
