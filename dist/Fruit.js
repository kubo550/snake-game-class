import { point, randomPos } from "./utils/index.js";
export default class Fruit {
    constructor(canvas, ctx, size) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        this.pos = point(randomPos(this.canvas.width, this.size), randomPos(this.canvas.height, this.size));
        this.color = "red";
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
    }
}
