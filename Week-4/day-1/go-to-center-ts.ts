'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawLine(x, y){
    ctx.beginPath();
    ctx.strokeStyle = `green`;
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
drawLine(0, 0);
drawLine(0, 200);
drawLine(0, 400);


