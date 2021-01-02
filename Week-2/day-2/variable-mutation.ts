'use strict';

let a: number = 3;
// make it bigger by 10

console.log(a + 10);

let b: number = 100;
// make it smaller by 7

console.log(b - 7);

let c: number = 44;
// double c's value

console.log(c * 2);

let d: number = 125;
// divide d's value by 5

console.log(d / 5);

let e1: number = 8;

// what's the cube of e's value?

console.log(Math.pow(e1, 3));

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    console.log(`true`);
} else {
    console.log(`false`);
}

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * 2 > g1) {
    console.log(`true`);
} else {
    console.log(`false`);
}

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let h1: number = h / 11;
if (h1 - Math.round(h1) === 0) {
    console.log(`true`);
} else {
    console.log(`false`);
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3)) {
    console.log(`true`);
} else {
    console.log(`false`);
}

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if ((j - Math.round(j)) / 3 === 0) {
    console.log(`It\`s divisible by 3`);
} else if ((j - Math.round(j)) / 5 === 0) {
    console.log(`It\`s dividible by 5`);
} else {
    console.log(`It\`s not divideble by 3 or 5 either`);
}