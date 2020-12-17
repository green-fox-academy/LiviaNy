'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

function randomColor() {
    const colors = ['red', 'green', 'blue', 'black', 'pink', 'magenta', 'orange', 'yellow', 'grey', 'cadetblue', 'salmon', 'teal', 'khaki', 'darkseagreen', 'coral', 'lightseagreen', `gold`, `silver`];
    const random01 = Math.random();
    const random1 = (colors.length - 1) * random01;
    const randINdex = Math.round(random1);
    return colors[randINdex];
}

ctx.beginPath();
ctx.strokeStyle = randomColor();
ctx.moveTo(250, 200);
ctx.lineTo(350, 200);
ctx.stroke();
