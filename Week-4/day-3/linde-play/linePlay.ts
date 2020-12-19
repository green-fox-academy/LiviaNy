'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let distance: number = 20

function drawLines(x, y, x1, y1) {
    ctx.beginPath();
    ctx.strokeStyle = `purple`;
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

for (let i: number = 0; i < canvas.height; i++) {
    let x: number = i * canvas.height / (distance - 1);
    let y: number = i * canvas.width / (distance - 1);
    drawLines(0, x, y, canvas.height);
}
