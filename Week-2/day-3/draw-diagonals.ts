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

let line6: number = 4;
let percent5: string = `%`;
for (let i: number = 0; i < line6; i++) {
    percent5 += `%`;
} console.log(percent5);

let space6: string = ` `;
let percent6: string = `%`
for (let i: number = 1; i < line6; i++) {
    percent6 += `%` + ` `;
    percent6 = percent6.substr(1, percent6.length);
    
    space6 = space6.substr(0, space6.length - 1);
    console.log(`%` + space6 + percent6 + `%`);
    space6 += space6
}
