`use strict`

//Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
let lineCount: number = 10;
let line: string = ``;
let space2: string = ``;
for (let i: number = 0; i < lineCount; i++) {
    line += `%`;
}
for (let j: number = 0; j < lineCount - 3; j++) {
    space2 = space2 += ` `;
}
let line2: string = `%`;
let line3: string = `%`;

console.log(line);
let space: string = ``;
for (let i: number = 0; i < lineCount - 2; i++) {
    console.log(line2 + space + line3 + space2 + line2);
    space += ` `;
    space2 = space2.substr(1, lineCount - 1);
}
console.log(line);