'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}


for (let y: number = 1; y < canvas.height / 20; y++) {
    drawLine(0, y * 20);
    drawLine(600, y * 20);
};
for (let x: number = 0; x <= canvas.width / 20; x++) {
    drawLine(x * 20, 0);
    drawLine(x * 20, 400);
};