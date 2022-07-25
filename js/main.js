const canvas = document.querySelector('#flappy-bird');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let spacePressed = false; // for bird movement
let angle = 0; // for idle animation movement
let hue = 0; // color
let frame = 0; // frame count for game loop
let score = 0; // game score
let gamespeed = 2; // speed of game elements

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas between animation
    bird.update();
    bird.draw(); // player
    handleParticles();
    requestAnimationFrame(animate); // create game loop
    angle += 0.12;
}

animate();

window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        spacePressed = true;
    }
});

window.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        spacePressed = false;
    }
});
