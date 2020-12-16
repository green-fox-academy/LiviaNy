'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.beginPath();
ctx.fillStyle = `magenta`
ctx.moveTo(10, 10);
ctx.lineTo(150, 10),
    ctx.lineTo(150, 100),
    ctx.lineTo(10, 100);
ctx.closePath();
ctx.fill()


ctx.beginPath();
ctx.fillStyle = `pink`
ctx.moveTo(350, 10);
ctx.lineTo(500, 10);
ctx.lineTo(500, 300);
ctx.lineTo(350, 300);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = `turquoise`
ctx.moveTo(10, 200);
ctx.lineTo(160, 200);
ctx.lineTo(160, 250);
ctx.lineTo(10, 250);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = `cyan`
ctx.moveTo(170, 10);
ctx.lineTo(300, 10);
ctx.lineTo(300, 350);
ctx.lineTo(170, 350);
ctx.closePath();
ctx.fill();