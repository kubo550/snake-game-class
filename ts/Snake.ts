import direction, { Keys } from "./direction.js";
import Fruit, { Pos } from "./Fruit.js";

export default class Snake {
    private pos: Pos[];
    private readonly color: string;
    private dir: { x: number; y: number };
    // public dir: Direction

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private size: number
    ) {
        this.pos = [
            { x: 50, y: 25 },
            { x: 25, y: 25 },
        ];
        this.color = "green";
        this.dir = direction.get(Keys.ArrowRight)!;
    }
    get nextSpot() {
        const head = this.pos[0];

        return {
            x: head.x + this.dir.x,
            y: head.y + this.dir.y,
        };
    }
    private edge() {
        const head = this.pos[0]

        head.x < 0 && (head.x = this.canvas.width - this.size);
        head.x >= this.canvas.width && (head.x = 0);

        head.y < 0 && (head.y = this.canvas.height - this.size);
        head.y >= this.canvas.height && (head.y = 0);
    }
    public grove() {
        this.pos = [this.pos[0], ...this.pos];
    }
    public arrowMove(e: KeyboardEvent) {
        const code = e.code as Keys;
        const dirs = new Set(Array(...Object.entries(Keys)).flat());

        if (
            dirs.has(code) &&
            this.dir.x !== direction.get(code)?.x &&
            this.dir.y !== direction.get(code)?.y
        ) {
            this.dir = direction.get(code)!;
        }
    }

    private drawBody(square: Pos) {
        const head = this.pos[0]
        this.ctx.fillStyle = square.x === head.x && square.y === head.y ? '#07db07' : this.color;
        this.ctx.fillRect(square.x, square.y, this.size, this.size);
    }

    public eatFruit(fruit: Fruit) {
        return this.pos[0].x === fruit.pos.x && this.pos[0].y === fruit.pos.y;
    }

    private updatePosition() {
        this.pos.unshift(this.nextSpot);
        this.pos.pop();
    }

    private draw() {
        this.pos.forEach(square => this.drawBody(square));
    }

    private tailDetection() {
        // todo Create tail Detection
        // this.pos.forEach(square => )

    }

    public update() {
        this.edge();
        this.updatePosition();
        this.tailDetection()
        this.draw();
    }
}
