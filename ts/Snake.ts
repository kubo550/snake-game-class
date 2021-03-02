import Direction from "./Direction.js"
import Fruit, { Pos } from "./Fruit.js"

// interface SnakePos extends Pos {
//     add: (pos: Pos)  => void
// }

export default class Snake {
    private pos: Pos[]
    private maxLength: number
    private readonly color: string
    // public dir: Direction

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private size: number) {
        this.maxLength = 5
        this.pos = [{ x: 25, y: 25 }]
        this.color = "green"
        // this.dir = 
    }

    private edge() {
        // todo 
    }

    private drawBody(square: Pos) {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(square.x, square.y, this.size, this.size);
    }

    public eatFruit(fruit: Fruit) {
        if (this.pos[0].x === fruit.pos.x && this.pos[0].y === fruit.pos.y) {
            console.log('eat');
        }
    }

    private updatePosition(positions: Pos[]) {

    }

    private draw() {
        this.pos.forEach(square => this.drawBody(square))
    }

    public update() {
        this.draw()

        this.updatePosition(this.pos)


    }
}