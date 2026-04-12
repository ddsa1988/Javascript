"use strict";

import game from "../Data/data.js";

// 1.Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);
console.log();

// 2.The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);
console.log();

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
const allPlayers = [...players1, ...players2];

console.log(allPlayers);
console.log();

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(player1Final);
console.log();

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;

console.log(team1);
console.log(draw);
console.log(team2);
console.log();

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
const printGoals = function (...playersNames) {
    let total = 0;

    for (const playerName of playersNames) {
        if (typeof playerName !== "string") continue;
        console.log(playerName);
        total++;
    }
    console.log(`Number of goals: ${total}`);
};

printGoals(...game.scored);

console.log();

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
team1 < team2 && console.log("Team 1 is more likely to win");
