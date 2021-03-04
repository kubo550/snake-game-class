import Fruit from "./Fruit.js";
import Snake from "./Snake.js";

export default class Game {
    private readonly gridSize: 25;
    private snake: Snake;
    private fruit: Fruit;

    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly ctx: CanvasRenderingContext2D
    ) {
        this.gridSize = 25;
        this.snake = new Snake(this.canvas, this.ctx, this.gridSize);
        this.fruit = new Fruit(this.canvas, this.ctx, this.gridSize);

        this.init();
    }

    private init() {
        this.canvas.width = this.gridSize ** 2;
        this.canvas.height = this.gridSize ** 2;

        document.addEventListener("keydown", e => this.snake.arrowMove(e));

        this.update();
    }

    public update() {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.snake.update();
        if (this.snake.eatFruit(this.fruit)) {
            this.snake.grove()
            this.fruit = new Fruit(this.canvas, this.ctx, this.gridSize)
        }

        this.fruit.draw();
    }
}
