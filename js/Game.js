import Fruit from "./Fruit.js";
import Snake from "./Snake.js";
export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gridSize = 25;
        this.snake = new Snake(this.canvas, this.ctx, this.gridSize);
        this.fruit = new Fruit(this.canvas, this.ctx, this.gridSize);
        this.init();
    }
    init() {
        this.canvas.width = this.gridSize ** 2;
        this.canvas.height = this.gridSize ** 2;
        this.draw();
    }
    draw() {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.update();
        this.fruit.draw();
    }
}
