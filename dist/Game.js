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
        document.addEventListener("keydown", e => this.snake.arrowMove(e));
        this.update();
    }
    update() {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.update();
        if (this.snake.eatFruit(this.fruit)) {
            this.snake.grove();
            this.fruit = new Fruit(this.canvas, this.ctx, this.gridSize);
        }
        this.fruit.draw();
    }
}
