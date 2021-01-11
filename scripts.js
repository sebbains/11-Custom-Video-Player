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

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Set up Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
rangeInputs.forEach(input => input.addEventListener('change', handleRangeUpdate));