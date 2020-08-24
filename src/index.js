class Particle {
    constructor() {
        this.started = false;
    }

    start() {
        this.started = true;
        this.lifespan = Math.random() * 250 + 250;
        // this.lifespan = Math.random() * 35 + 35;
        this.age = 0;
        this.initial = [
            Math.random() * canvas.clientWidth,
            Math.random() * canvas.clientHeight
        ];
        this.pos = this.initial.slice(0);
        this.velocity = [
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2
        ];
        this.ctx = canvas.getContext("2d");
    }

    calcOpacity() {
        const quarter = this.lifespan / 4;
        if (this.age < quarter)
            return this.age / quarter;
        else if (this.age > this.lifespan - quarter)
            return 1 - (this.age - this.lifespan + quarter) / quarter;
        return 1;
    }

    destroy() {
        clearInterval(this.renderer);
        this.start();
    }

    draw() {
        if (!this.started)
            return;

        this.age++;
        if (this.age >= this.lifespan)
            return this.destroy();

        this.pos = [
            this.pos[0] += this.velocity[0],
            this.pos[1] += this.velocity[1]
        ];

        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.calcOpacity() * 0.8})`;
        this.ctx.arc(this.pos[0], this.pos[1], 3, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

window.particles = [];
const canvas = document.getElementById("bg");

const amount = 100;

if (canvas.getContext) {
    let i = 0;
    for (; i <= amount; i++)
        particles.push(new Particle());

    i = 0;
    const init = () => {
        i++;
        if (i >= amount)
            return;
        particles[i].start();
        setTimeout(init, Math.random() * 10 + 5000 / amount);
    };
    init();

    setInterval(() => {
        if (canvas.clientHeight !== window.innerHeight)
            canvas.setAttribute("height", window.innerHeight);
        if (canvas.clientWidth !== window.innerWidth)
            canvas.setAttribute("width", window.innerWidth);

        canvas.getContext("2d").clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        particles.forEach(part => part.draw());
    }, 15);
}