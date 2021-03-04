export const point = (x: number, y: number) => ({ x, y });
export const randomPos = (range: number, size: number) => Math.floor(Math.random() * range) % size * size;

export type Pos = {
    x: number;
    y: number;
};

export default class Fruit {
    // todo REMOVE SNAKE PLACE
    public readonly pos: Pos;
    private readonly color: string
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
