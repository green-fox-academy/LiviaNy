export{}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let lines: number = 6;
let space:string = ` `;
let star:string = `*`;

for(let i:number= 1; i < lines; i++){
space+=` `
} for(let j:number = 0; j <= lines; j++){
    console.log(space+star);
    star+=`**`;
    space = space.substr(0,space.length - 1);

}
