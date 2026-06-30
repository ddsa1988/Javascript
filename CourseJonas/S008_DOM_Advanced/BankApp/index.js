"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const navLinks = document.querySelector(".nav__links");
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");
const lazyLoadImgs = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slidersBtn = document.querySelectorAll(".slider__btn");
const dotsContainer = document.querySelector(".dots");

// Modal window

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

// Tabbed component

tabContainer.addEventListener("click", function (e) {
    e.preventDefault();

    // It's necessary use the closest method because there is a span element inside the button
    const tabClicked = e.target.closest(".operations__tab");

    if (tabClicked == undefined) return;

    const dataTabClicked = tabClicked.dataset.tab;

    if (!tabClicked.classList.contains("operations__tab")) return;

    // Activate tab and content area
    for (let i = 0; i < tabs.length; i++) {
        const dataTab = tabs[i].dataset.tab;

        if (dataTab === dataTabClicked) {
            tabs[i].classList.add("operations__tab--active");
            tabsContent[i].classList.add("operations__content--active");
        } else {
            tabs[i].classList.remove("operations__tab--active");
            tabsContent[i].classList.remove("operations__content--active");
        }
    }
});

// Menu fade animation

const handleHover = function (e) {
    const link = e.target;

    if (link == undefined) return;

    if (!link.classList.contains("nav__link")) return;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
        if (sibling !== link) {
            sibling.style.opacity = this;
        }
    });

    logo.style.opacity = this;

    // console.log(e.target);
    // console.log(this);
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation: intersection observer API

const stickyNav = function (entries, observer) {
    // const entry = entries[0];
    const [entry] = entries; // Destructuring

    if (entry.isIntersecting) {
        nav.classList.remove("sticky");
    } else {
        nav.classList.add("sticky");
    }
};

const navHeight = nav.getBoundingClientRect().height;

const headerObserverOptions = {
    root: null, // The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
    rootMargin: `-${navHeight}px`, // Margin around the root
    threshold: 0, // Percentage of the target's visibility the observer's callback should be executed.
};

const headerObserver = new IntersectionObserver(stickyNav, headerObserverOptions);

headerObserver.observe(header); // Target element

// Reveal sections

const revealSection = function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove("section--hidden");

        observer.unobserve(entry.target);
    });
};

const sectionObserverOptions = {
    root: null,
    threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, sectionObserverOptions);

sections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

// Lazy loading images

const loadImg = function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.src = entry.target.dataset.src;

        entry.target.addEventListener("load", function () {
            entry.target.classList.remove("lazy-img");
        });

        observer.unobserve(entry.target);
    });
};

const lazyImgObserverOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

const lazyImgObserver = new IntersectionObserver(loadImg, lazyImgObserverOptions);

lazyLoadImgs.forEach((img) => {
    lazyImgObserver.observe(img);
});

// Sliders

const maxSlide = slides.length - 1;
let currentSlide = 0;

const createDots = function () {
    slides.forEach((slide, index) => {
        dotsContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${index}"></button>`);
    });
};

const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
        dot.classList.remove("dots__dot--active");
    });

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};

const previousSlide = function () {
    currentSlide = currentSlide > 0 ? --currentSlide : currentSlide;
};

const nextSlide = function () {
    currentSlide = currentSlide < maxSlide ? ++currentSlide : currentSlide;
};

const goToSlide = function (slideNumber) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideNumber) * 100}%)`;
    });

    activateDot(slideNumber);
};

createDots();
goToSlide(0);

slidersBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("slider__btn--left")) {
            previousSlide();
        } else {
            nextSlide();
        }

        goToSlide(currentSlide);
    });
});

dotsContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dots__dot")) return;

    currentSlide = Number(e.target.dataset.slide);

    goToSlide(currentSlide);
});
