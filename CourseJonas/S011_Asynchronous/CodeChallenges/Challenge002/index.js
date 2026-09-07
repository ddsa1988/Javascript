"use strict";

const container = document.querySelector(".container");

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement("img");

        img.src = imgPath;

        img.addEventListener("load", function () {
            container.appendChild(img);
            resolve(img);
        });

        img.addEventListener("error", function (err) {
            reject(err);
        });
    });
};

let currentImg;

createImage("./img/img-1.jpg")
    .then((img) => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
        return createImage("./img/img-2.jpg");
    })
    .then((img) => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
        return createImage("./img/img-3.jpg");
    })
    .then((img) => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
    })
    .catch((error) => {
        console.error(error);
    });
