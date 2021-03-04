import direction, { Keys } from "./direction.js"
import Fruit, { Pos } from "./Fruit.js"

export default class Snake {
    private pos: Pos[]
    private maxLength: number
    private readonly color: string
    private dir: { x: number, y: number }
    // public dir: Direction

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private size: number) {
        this.maxLength = 5
        this.pos = [{ x: 50, y: 25 }, { x: 25, y: 25 }]
        this.color = "green"
        this.dir = direction.get(Keys.ArrowRight)!

    }
    get nextSpot() {
        const head = this.pos[0]

        return {
            x: head.x + this.dir.x,
            y: head.y + this.dir.y
        }
    }
    private edge() {
        this.nextSpot.x <= -this.size && (this.pos[0].x = this.canvas.width)
        this.nextSpot.x >= this.canvas.width && (this.pos[0].x = -this.size)

        this.nextSpot.y <= -this.size && (this.pos[0].y = this.canvas.height)
        this.nextSpot.y >= this.canvas.height && (this.pos[0].y = -this.size)

    }
    public grove() {
        this.pos = [this.pos[0], ...this.pos]
    }
    public arrowMove({ code }: KeyboardEvent) {

        const dirs = new Set(Array(...Object.entries(Keys)).flat());


        // todo wiadomo co


        if (dirs.has(code)) {
            this.dir = direction.get(code as Keys)!
        }

    }

    private drawBody(square: Pos) {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(square.x, square.y, this.size, this.size);
    }

    public eatFruit(fruit: Fruit) {
        return this.pos[0].x === fruit.pos.x && this.pos[0].y === fruit.pos.y

    }

    private updatePosition() {
        this.pos.unshift(this.nextSpot)
        this.pos.pop()
    }

    private draw() {
        this.pos.forEach(square => this.drawBody(square))
    }

    public update() {

        this.edge()
        this.updatePosition()


        this.draw()
    }
}