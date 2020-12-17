'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = `black`;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fill();

function Star(size:number, positionX:number, positionY:number){
    ctx.beginPath();
    ctx.fillStyle = `grey`;
    // ctx.rotate(0.314);
    ctx.fill;
    ctx.beginPath();
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = size / 6;
    ctx.fillRect(positionX, positionY, size, size);
    ctx.moveTo(positionX + size/2, positionY - size/2);
    let diagonal:number = Math.sqrt(size* size + size * size);
    ctx.lineTo(positionX + size / 2, positionY + size + (size / 2));
    //ctx.moveTo(positionX + size/2, positionY - size/2);
    ctx.moveTo(positionX - size / 2, positionY + size / 2);
    ctx.lineTo(positionX + size + (size / 2), positionY + size /2);
    ctx.moveTo(positionX - size/6, positionY - size/6);
    ctx.lineTo(positionX + size + (size/6), positionY + size + (size/6));
    ctx.moveTo(positionX - size/6, positionY + size + (size / 6) );
    ctx.lineTo(positionX + size + (size/6), positionY - (size/6));
    ctx.stroke()
    }