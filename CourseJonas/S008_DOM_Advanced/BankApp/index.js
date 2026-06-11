"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const navLinks = document.querySelector(".nav__links");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Scrolling

btnScrollTo.addEventListener("click", function (e) {
    // const coordsSec1 = section1.getBoundingClientRect(); // This coordinates are relative to the start of the viewport

    // window.scrollTo({
    //     top: coordsSec1.top + window.scrollY,
    //     left: coordsSec1.left + window.scrollX,
    //     behavior: "smooth",
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation

navLinks.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    const section = document.querySelector(id);

    if (!e.target.classList.contains("nav__link")) return;

    section.scrollIntoView({ behavior: "smooth" });
});
