export var Keys;
(function (Keys) {
    Keys["ArrowUp"] = "ArrowUp";
    Keys["ArrowDown"] = "ArrowDown";
    Keys["ArrowRight"] = "ArrowRight";
    Keys["ArrowLeft"] = "ArrowLeft";
})(Keys || (Keys = {}));
;
const direction = new Map([
    [Keys.ArrowUp, { x: 0, y: -25 }],
    [Keys.ArrowDown, { x: 0, y: 25 }],
    [Keys.ArrowLeft, { x: -25, y: 0 }],
    [Keys.ArrowRight, { x: 25, y: 0 }],
]);
export default direction;
