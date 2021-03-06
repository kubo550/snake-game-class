import direction, { Keys } from "./direction.js";
export default class Snake {
    // public dir: Direction
    constructor(canvas, ctx, size) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        this.pos = [
            { x: 50, y: 25 },
            { x: 25, y: 25 },
        ];
        this.color = "green";
        this.dir = direction.get(Keys.ArrowRight);
    }
    get nextSpot() {
        const head = this.pos[0];
        return {
            x: head.x + this.dir.x,
            y: head.y + this.dir.y,
        };
    }
    edge() {
        const head = this.pos[0];
        head.x < 0 && (head.x = this.canvas.width - this.size);
        head.x >= this.canvas.width && (head.x = 0);
        head.y < 0 && (head.y = this.canvas.height - this.size);
        head.y >= this.canvas.height && (head.y = 0);
    }
    grove() {
        this.pos = [this.pos[0], ...this.pos];
    }
    arrowMove(e) {
        const code = e.code;
        const dirs = new Set(Array(...Object.entries(Keys)).flat());
        if (dirs.has(code) &&
            this.dir.x !== direction.get(code)?.x &&
            this.dir.y !== direction.get(code)?.y) {
            this.dir = direction.get(code);
        }
    }
    drawBody(square) {
        const head = this.pos[0];
        this.ctx.fillStyle = square.x === head.x && square.y === head.y ? '#07db07' : this.color;
        this.ctx.fillRect(square.x, square.y, this.size, this.size);
    }
    eatFruit(fruit) {
        return this.pos[0].x === fruit.pos.x && this.pos[0].y === fruit.pos.y;
    }
    updatePosition() {
        this.pos.unshift(this.nextSpot);
        this.pos.pop();
    }
    draw() {
        this.pos.forEach(square => this.drawBody(square));
    }
    tailDetection() {
        // todo Create tail Detection
        // this.pos.forEach(square => )
    }
    update() {
        this.edge();
        this.updatePosition();
        this.tailDetection();
        this.draw();
    }
}
