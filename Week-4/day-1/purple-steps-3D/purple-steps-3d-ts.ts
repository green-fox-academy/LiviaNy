'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
let size:number = 10;
let strokeWidth:number = 2;
let rectLength:number = 8;
let rectPosition:number = size
for (let i: number = 1; i <= rectLength; i++) {
    ctx.beginPath();
    ctx.strokeStyle = `black`;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(rectPosition + (i - 1) * size, rectPosition + (i - 1) * size, i * size - strokeWidth, i * size - strokeWidth);
    ctx.fillStyle = `purple`;
    ctx.fillRect(rectPosition + (i - 1) * size, rectPosition + (i - 1) * size, i * size - strokeWidth, i * size - strokeWidth);
rectPosition = rectPosition + (i - 1) * size;
};