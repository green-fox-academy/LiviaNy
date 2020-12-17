'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = `black`;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fill();
let size: number = Math.random() * 15;
let timing: number = 50;


function randomColor() {
    const grey: string[] = [`#000000`, `#080808`, `#101010`, `#181818`, `#202020`, `#282828`, `#303030`, `383838`, `404040`, `#484848`, `#505050`, `#585858`, `#606060`, `#686868`, `#707070`, `#787878`, `#808080`, `#888888`, `#909090`, `#989898`, `#A0A0A0`, `#A8A8A8`, `#B0B0B0`, `#B8B8B8`, `#C0C0C0`, `#C8C8C8`, `#D0D0D0`, `#D8D8D8`, `#E0E0E0`, `#E8E8E8`, `#F0F0F0`, `#F8F8F8`, `#FFFFFF`];
    const colorpicker: number = Math.round(Math.random() * (grey.length - 1));
    return grey[colorpicker];
}

for (let i: number = 0; i < 20; i++) {
    setTimeout(function () {
        let randomPositionX: number = (canvas.width - size) * Math.random();
        let randomPositionY: number = (canvas.height - size) * Math.random();
        Star(size, randomPositionX, randomPositionY);
    }, 500 * i);


    function Star(size: number, positionX: number, positionY: number) {
        ctx.beginPath();
        ctx.fillStyle = randomColor();;
        // ctx.rotate(0.314);
        ctx.fill;
        ctx.beginPath();
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = size / 6;
        ctx.fillRect(positionX, positionY, size, size);
        ctx.moveTo(positionX + size / 2, positionY - size / 2);
        let diagonal: number = Math.sqrt(size * size + size * size);
        ctx.lineTo(positionX + size / 2, positionY + size + (size / 2));
        //ctx.moveTo(positionX + size/2, positionY - size/2);
        ctx.moveTo(positionX - size / 2, positionY + size / 2);
        ctx.lineTo(positionX + size + (size / 2), positionY + size / 2);
        ctx.moveTo(positionX - size / 6, positionY - size / 6);
        ctx.lineTo(positionX + size + (size / 6), positionY + size + (size / 6));
        ctx.moveTo(positionX - size / 6, positionY + size + (size / 6));
        ctx.lineTo(positionX + size + (size / 6), positionY - (size / 6));
        ctx.stroke()
    }
}