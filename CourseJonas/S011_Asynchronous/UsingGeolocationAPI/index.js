"use strict";

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     (position) => resolve(position),
        //     (error) => reject(error),
        // );

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition()
    .then((pos) => console.log(pos))
    .catch((error) => console.error(error));
