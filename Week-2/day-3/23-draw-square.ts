`use strict`;

let lineCount5: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let line: string = `%%%%%%`;
let line2: string = `%    %`;

for (let i: number = 1; i <= lineCount5; i++) {
  if (i === 1 || i === lineCount5) {
    console.log(line);
  } else {
    console.log(line2);
  }
}
