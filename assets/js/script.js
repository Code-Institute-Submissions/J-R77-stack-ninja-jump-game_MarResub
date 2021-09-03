/* select the ninja, sumo and score from the document by getting element by Id*/
const ninja = document.getElementById('ninja')
const sumo = document.getElementById('sumo')
const score = document.getElementById('score')

/*Function to define what happens when the ninja jumps adding jump-animation to fuction from css*/

function jump() {
    ninja.classList.add('jump-ninja');
    setTimeout(() => {
        ninja.classList.remove('jump-ninja');
    }, 1500);
}

/*Event listener to use the jump function on pressing a key and to stop user pressing jump until original jump is finished*/

document.addEventListener('keypress', () => {
    if (!ninja.classList.contains('jump-ninja')) {
        jump();
    }
})