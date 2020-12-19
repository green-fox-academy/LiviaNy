'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let distance: number = 20

function drawLines(xy) {
    ctx.beginPath();
    ctx.strokeStyle = `purple`
    ctx.moveTo(0, xy);
    ctx.lineTo(xy, canvas.height);
    ctx.stroke();
}

for (let i: number = 0; i < canvas.height; i++) {
    drawLines(distance * i);
}
