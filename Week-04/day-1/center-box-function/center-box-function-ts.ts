'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareSize(size) {
    ctx.beginPath();
    ctx.strokeStyle = `cadetblue`;
    ctx.moveTo(300 - size / 2, 200 - size / 2);
    ctx.lineTo(300 - size / 2, 200 + size / 2);
    ctx.lineTo(300 + size / 2, 200 + size / 2);
    ctx.lineTo(300 + size / 2, 200 - size / 2);
    ctx.closePath();
    ctx.stroke();
}
// squareSize(50);
// squareSize(100);
// squareSize(150);
// squareSize(200);
// squareSize(250);
// squareSize(300);
// squareSize(350);
// squareSize(400);


let size: number = 15;
for (let i: number = 0; i < canvas.height / size; i++) {
    squareSize(size * i);
}