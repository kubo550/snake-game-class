import { point, randomPos } from "./utils/index.js";

export type Pos = {
    x: number;
    y: number;
};

export default class Fruit {
    public readonly pos: Pos;
    private readonly color: string

    // Todo Remove spot from possibies where snake is

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private size: number
    ) {
        this.pos = point(randomPos(this.canvas.width, this.size), randomPos(this.canvas.height, this.size));
        this.color = "red"
    }
    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
    }
}
