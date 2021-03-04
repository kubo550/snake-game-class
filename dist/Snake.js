import direction, { Keys } from "./direction.js";
export default class Snake {
    // public dir: Direction
    constructor(canvas, ctx, size) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        this.maxLength = 5;
        this.pos = [{ x: 50, y: 25 }, { x: 25, y: 25 }];
        this.color = "green";
        this.dir = direction.get(Keys.ArrowRight);
    }
    get nextSpot() {
        const head = this.pos[0];
        return {
            x: head.x + this.dir.x,
            y: head.y + this.dir.y
        };
    }
    edge() {
        this.nextSpot.x <= -this.size && (this.pos[0].x = this.canvas.width);
        this.nextSpot.x >= this.canvas.width && (this.pos[0].x = -this.size);
        this.nextSpot.y <= -this.size && (this.pos[0].y = this.canvas.height);
        this.nextSpot.y >= this.canvas.height && (this.pos[0].y = -this.size);
    }
    grove() {
        this.pos = [this.pos[0], ...this.pos];
    }
    arrowMove({ code }) {
        const dirs = new Set(Array(...Object.entries(Keys)).flat());
        // todo wiadomo co
        if (dirs.has(code)) {
            this.dir = direction.get(code);
        }
    }
    drawBody(square) {
        this.ctx.fillStyle = this.color;
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
    update() {
        this.edge();
        this.updatePosition();
        this.draw();
    }
}
