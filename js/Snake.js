// interface SnakePos extends Pos {
//     add: (pos: Pos)  => void
// }
export default class Snake {
    // public dir: Direction
    constructor(canvas, ctx, size) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        this.maxLength = 5;
        this.pos = [{ x: 25, y: 25 }];
        this.color = "green";
        // this.dir = 
    }
    edge() {
        // todo 
    }
    drawBody(square) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(square.x, square.y, this.size, this.size);
    }
    eatFruit(fruit) {
        if (this.pos[0].x === fruit.pos.x && this.pos[0].y === fruit.pos.y) {
            console.log('eat');
        }
    }
    updatePosition(positions) {
    }
    draw() {
        this.pos.forEach(square => this.drawBody(square));
    }
    update() {
        this.draw();
        this.updatePosition(this.pos);
    }
}
