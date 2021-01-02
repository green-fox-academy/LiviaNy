'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let lineCount: number = 4;
let space: string = ` `;
let star: string = `*`;

for (let i: number = 1; i < lineCount; i++) {
    space += ` `;
}
for (let j: number = 0; j < lineCount; j++) {
    console.log(space + star);
    star += `**`;
    space = space.substr(0, space.length - 1);
}

// let lineCount: number = 4;
// let star:string = '*';
// for (let i:number = 1, j:number = lineCount - i; i <= lineCount; i++, j-- ){
//         let space: string = '';
// for (let j:number = lineCount - i; j > 0; j--) {
//     space += ' ';  
// }
// console.log(space+star);
// star += '**';
// }