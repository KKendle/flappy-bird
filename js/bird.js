class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.velocityY = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
        this.flapStrength = 2;
        this.wobble = 2.5; // idle movement up and down
    }

    /* loop for bird */
    update() {
        let curve = Math.sin(angle) * 20; // creates idle flapping in place animation

        // stay within bottom canvas
        if (this.y > canvas.height - (this.height * this.wobble) + curve) {
            this.y = canvas.height - (this.height * this.wobble) + curve;
            this.velocityY = 0;
        } else {
            this.velocityY += this.weight;
            this.velocityY *= 0.9; // reduce overall velocity for smoother flapping
            this.y += this.velocityY;
        }

        // stay within top canvas
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.velocityY = 0;
        }

        if (spacePressed) {
            this.flap();
        }
    }

    /* draw bird */
    draw() {
        ctx.fillStyle='red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    /* bird flys up */
    flap() {
        this.velocityY -= this.flapStrength;
    }
}

const bird = new Bird();
