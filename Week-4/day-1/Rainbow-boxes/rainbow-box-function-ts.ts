'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
let size: number = 10;


function rainbowSquare(size) {
    for (let i: number = 0; i < Math.floor(canvas.width / size); i++) {
        for (let j: number = 0; j < Math.floor(canvas.height / size); j++) {
            ctx.beginPath();
            ctx.strokeStyle = randomColor();
            ctx.moveTo(i * size, j * size);
            ctx.lineTo(size + i * size, j * size);
            ctx.lineTo(size + i * size, size + j * size);
            ctx.lineTo(i * size, size + j * size)
            ctx.closePath();
            ctx.stroke()
        }
    }

    }


rainbowSquare(size);


