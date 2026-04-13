"use strict";

import game from "../Data/data.js";

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}
console.log();

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let sum = 0;

for (const value of odds) {
    if (!Number.isFinite(value)) continue;
    sum += value;
}

console.log(`Odds average: ${(sum / odds.length).toFixed(2)}`);
console.log();

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
for (const [key, value] of Object.entries(game.odds)) {
    const team = game[key] ?? "draw";
    console.log(`Odd of victory ${team}: ${value}`);
}

console.log();

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
const scorers = {};

for (const player of game.scored) {
    if (scorers[player] == null) {
        scorers[player] = 1;
    } else {
        scorers[player]++;
    }
}

console.log(scorers);
