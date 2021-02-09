// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

'use strict';

let lineCount1: number = 4;
let star1: string = '*';

for (let i: number = 0; i < lineCount1; i++) {
  console.log(star1);
  star1 += '*';
}
