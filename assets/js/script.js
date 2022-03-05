

/* select the ninja, sumo, score, game-container and gameOver from the 
document by getting element by query selector*/
let gameContainer = document.querySelector("#gameContainer");
let ninja = document.querySelector("#ninja");
let sumo = document.querySelector("#sumo");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

/* declaring the variable for score */
let interval = null;
let playerScore = 0;

/* Function to control the score */

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

/* Function to handle starting Game */ 
window.addEventListener("keydown" , (start) => {
    // console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        sumo.classList.add("sumoActive");

        /* Score */ 
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

/* Function for making ninja jump */ 
window.addEventListener("keydown" , (e) => {
    // console.log(e);
    if (e.key == "ArrowUp")
         if(ninja.classList != "ninjaActive")
             {
                 ninja.classList.add("ninjaActive");
                 /* Remove class after 0.5 seconds */ 
                 setTimeout(() => {
                     ninja.classList.remove("ninjaActive");
                 } ,500);
             }
});

/* Function for game over if Ninja hits sumo wrestler */



/*Function to define what happens when the ninja jumps adding jump-animation to fuction from css*/



/*Event listener to use the jump function on pressing a key and to stop user pressing jump 
until original jump is finished*/



/* set interval game loop to remove sumo wrester at end of game screen and determine collision
recognition between sumo wrester and ninja*/


