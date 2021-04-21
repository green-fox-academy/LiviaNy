'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let size: number = 20;
let maxWidth: number = canvas.width / size;
let maxHeight: number = canvas.height / size;
for (let x: number = 0; x < maxWidth; x++) {
    for (let y: number = 0; y < maxHeight; y++) {
        if (x % 2 === 0 && y % 2 === 1 || x % 2 === 1 && y % 2 === 0) {
            ctx.beginPath();
            ctx.fillStyle = `black`;
            ctx.fillRect(x * size, y * size, size, size);
            ctx.fill();
        }
    }
}
