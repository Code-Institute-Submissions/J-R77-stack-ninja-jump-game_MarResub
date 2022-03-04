/*jshint esversion: 6 */


/* select the ninja, sumo and score from the document by getting element by Id*/
const ninja = document.getElementById("ninja");
const sumo = document.getElementById("sumo");
const score = document.getElementById("score");

/*Function to define what happens when the ninja jumps adding jump-animation to fuction from css*/

function jump() {
  ninja.classList.add("jump-ninja");
  setTimeout(() => {
    ninja.classList.remove("jump-ninja");
  }, 500);
}

/*Event listener to use the jump function on pressing a key and to stop user pressing jump 
until original jump is finished*/

document.addEventListener("keypress", () => {
  if (!ninja.classList.contains("jump-ninja")) {
    jump();
  }
});

/* set interval game loop to remove sumo wrester at end of game screen and determine collision
recognition between sumo wrester and ninja*/

setInterval(() => {
  score.innerText++;
  const ninjaTop = parseInt(
    window.getComputedStyle(ninja).getPropertyValue("top")
  );
  const sumoLeft = parseInt(
    window.getComputedStyle(sumo).getPropertyValue("left")
  );

  if (sumoLeft < 0) {
    sumo.style.display = "none";
  } else {
    sumo.style.display = "";
  }

  if (sumoLeft < 35 && sumoLeft > 0 && ninjaTop > 100) {
    alert("GAME OVER");
    location.reload();
  }
}, 50);
