const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20; // space between obstacles
        this.bottom = (Math.random() * canvas.height / 3) + 20; // space between obstacles
        this.x = canvas.width;
        this.width = 20; // width of obstacle
        this.color = `hsla(${hue}, 100%, 50%, 1)`;
        this.counted = false;
    }

    update() {
        this.x -= gamespeed;
        this.draw();

        if (!this.counted && this.x < bird.x) {
            score++;
            this.counted = true;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
}

function handleObstacles() {
    // create new obstacle every 50 frames
    if (frame % 50 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }

    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }

    // remove old obstacles
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}
