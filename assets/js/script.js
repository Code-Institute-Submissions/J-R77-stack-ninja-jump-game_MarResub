/* select the ninja, sumo and score from the document by getting element by Id*/
const ninja = document.getElementById('ninja')
const sumo = document.getElementById('sumo')
const score = document.getElementById('score')

/*Function to define what happens when the ninja jumps adding jump-animation to fuction from css*/

function jump() {
    ninja.classList('jump-animation');
    setTimeout(() => {
        ninja.classList.remove('jump-animation');
    }, 500);
}