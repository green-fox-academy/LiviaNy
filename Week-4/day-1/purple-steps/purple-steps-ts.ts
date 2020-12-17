'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
let size: number = 10;
//let squareDiameter:number = Math.sqrt(size * size + size * size);
let strokeWitdth: number = 2;

//function square(){
// let canvasDiameter:number = Math.sqrt(Math.pow(size, 2) + Math.pow(size, 2));
for (let i: number = 1; i < 20; i++) {
    ctx.beginPath();
    ctx.strokeStyle = `black`;
    ctx.lineWidth = strokeWitdth;
    ctx.strokeRect(size + strokeWitdth + (i - 1) * (size + strokeWitdth), size + strokeWitdth + (i - 1) * (size + strokeWitdth), size, size);
    ctx.fillStyle = `purple`;
    ctx.fillRect(size + strokeWitdth + (i - 1) * (size + strokeWitdth), size + strokeWitdth + (i - 1) * (size + strokeWitdth), size, size);
    // ctx.moveTo((squareDiameter + strokeWitdth) * i, (squareDiameter + strokeWitdth) * i);
    // ctx.lineTo((squareDiameter + strokeWitdth) + (squareDiameter + strokeWitdth) * i, (squareDiameter + strokeWitdth) * i);
    // ctx.lineTo((squareDiameter + strokeWitdth) + (squareDiameter + strokeWitdth) * i, (squareDiameter + strokeWitdth) + (squareDiameter + strokeWitdth) * i);
    // ctx.lineTo((squareDiameter + strokeWitdth) * i, (squareDiameter + strokeWitdth) + (squareDiameter + strokeWitdth) * i);
    // ctx.closePath();

}
//}

 //square();