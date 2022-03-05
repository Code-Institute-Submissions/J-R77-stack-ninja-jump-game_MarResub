

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

/* Function for game over if Ninja hits sumo */
let result = setInterval(() => {
    let ninjaBottom = parseInt(getComputedStyle(ninja).getPropertyValue("bottom"));
    // console.log("ninjaBottom" + ninjaBottom);

    let sumoLeft = parseInt(getComputedStyle(sumo).getPropertyValue("left"));
    // console.log("SumoLeft" + sumoLeft);

    if (ninjaBottom <= 90 && sumoLeft >= 20 && sumoLeft <= 160) {
        // console.log("Game Over");

        
        gameOver.style.display = "block";
        sumo.classList.remove("sumoActive");
        clearInterval(interval);
        playerScore = 0;
    }

}, 10);



