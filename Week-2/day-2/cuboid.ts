// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

//surfaceAreaMath: (a+b+c)*2
//volumeMath: a*b*c

let a: number = 10.1;
let b: number = 11.2;
let c: number = 12.3;

let surfaceArea: number = (a + b + c) * 2;
let volume: number = a * b * c;

console.log(`Surface Area: ` + surfaceArea.toFixed(2));
console.log(`Volume: ` + volume.toFixed(2));
