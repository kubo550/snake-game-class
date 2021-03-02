import Game from "./Game.js";

const canvas = document.querySelector('canvas')!
const ctx = canvas.getContext('2d')!;


const game = new Game(canvas, ctx)
