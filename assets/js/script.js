/*jshint esversion: 6 */

/* select the ninja, sumo, score, game-container and gameOver from the 
document by getting element by query selector*/
const game-container = document.querySelector("#game-container");
const ninja = document.querySelector("#ninja");
const sumo = document.querySelector("#sumo");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#gameOver");

/* declaring the variable for score */
const interval = null;
const playerScore = 0;

/* Function to control the score */

const scoreChecker = () => {
    playerScore++;
    score.innerText = 'Score <b>${playerScore}</b>';
}




/*Function to define what happens when the ninja jumps adding jump-animation to fuction from css*/



/*Event listener to use the jump function on pressing a key and to stop user pressing jump 
until original jump is finished*/



/* set interval game loop to remove sumo wrester at end of game screen and determine collision
recognition between sumo wrester and ninja*/


