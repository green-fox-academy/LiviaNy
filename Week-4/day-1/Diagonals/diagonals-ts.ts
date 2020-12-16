'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

// ctx.beginPath();
// ctx.strokeStyle = `green`;
// ctx.moveTo(0, 0);
// ctx.lineTo(600, 400);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = `red`;
// ctx.moveTo(600, 0);
// ctx.lineTo(0, 400);
// ctx.stroke();

function rightLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = `green`;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


// rightLine(0, 0, 600, 400);
// rightLine(0, 30, 570, 400),
// rightLine(0, 60, 540, 400);
// rightLine(0, 90, 510, 400);

for (let i:number = 0; i <= 400; i + 10){
     for( let j:number = 0; j <= 600; j + 15) {
        rightLine(0, i, j, 400);
     }
}