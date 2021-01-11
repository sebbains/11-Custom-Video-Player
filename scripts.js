// Grab all elements
const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const rangeInputs = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');


// Build functions
function togglePlay(){
    video.paused? video.play(): video.pause();
}
function updateButton(){
    const icon = this.paused? '►' : '❚ ❚';
    toggle.textContent = icon; 
}


// Set up Event Listeners
// video.addEventListener("click", updateButton);
// video.addEventListener("play", togglePlay);
// video.addEventListener("pause", togglePlay);
// toggle.addEventListener("click", togglePlay);