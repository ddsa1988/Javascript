"use strict";

const flightsText =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getFlightString = function (content) {
    const [type, from, to, time] = content.trim().split(";");

    const flightData =
        type.replaceAll("_", " ").trim() +
        " from " +
        from.slice(0, 3).toUpperCase() +
        " to " +
        to.slice(0, 3).toUpperCase() +
        " (" +
        time.replace(":", "h") +
        ")";

    return flightData;
};

const flights = flightsText.split("+");
let maxLength = 0;

for (const flight of flights) {
    if (flight.length <= maxLength) continue;

    maxLength = flight.length;
}

for (const flight of flights) {
    console.log(getFlightString(flight).padStart(maxLength, " "));
}
