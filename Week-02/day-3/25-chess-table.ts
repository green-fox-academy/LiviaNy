`use strict`;

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lines: number = 8;
let lineA: string = `% % % %`;

for (let i: number = 1; i <= lines; i++) {
  if (i % 2 === 0) {
    console.log(lineA);
  } else {
    console.log(` ` + lineA);
  }
}
