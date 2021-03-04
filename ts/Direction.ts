export enum Keys {
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowRight = "ArrowRight",
    ArrowLeft = "ArrowLeft"
};


const direction = new Map([
    [Keys.ArrowUp, { x: 0, y: -25 }],
    [Keys.ArrowDown, { x: 0, y: 25 }],
    [Keys.ArrowLeft, { x: -25, y: 0 }],
    [Keys.ArrowRight, { x: 25, y: 0 }],
]);

export default direction;