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
let collission = false;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas between animation
    handleParticles();
    handleObstacles();
    bird.update();
    bird.draw(); // player
    displayScore();
    handleCollisions();
    if (collission) {
        return;
    }
    requestAnimationFrame(animate); // create game loop
    angle += 0.12;
    hue++;
    frame++; // increase frame count;
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

const bang = new Image();
bang.src = 'img/bang.png';

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
                (bird.y < 0 + obstaclesArray[i].top &&
                bird.y + bird.height > 0 ||
                bird.y > canvas.height - obstaclesArray[i].bottom &&
                bird.y + bird.height < canvas.height)) {
            // collission detected
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            collission = true;
            ctx.font = '25px Georgia';
            ctx.fillStyle = 'black';
            ctx.fillText(`Game Over, your score is ${score}`, 100, canvas.height / 2 - 10);
            return;
        }
    }
}

function displayScore() {
    ctx.fillStyle = 'black';
    ctx.font = '70px Georgia';
    ctx.strokeText(score, 25, 70);
    ctx.fillText(score, 25, 70);
}
