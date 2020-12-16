'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x, y) {
    ctx.beginPath();
    ctx.fillStyle = `purple`
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y),
        ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.closePath();
    ctx.fill()
}

drawSquare(100, 150);
drawSquare(300, 350);
drawSquare(500, 50);