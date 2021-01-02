`use strict`

let lineCount: number = 7;
let space5: string = ` `;
let star: string = `*`;

for (let i: number = 1; i < (lineCount - 1)/2; i++) {
    space5 += ` `;
} for (let j: number = 0; j < (lineCount - 1)/2; j++) {
    console.log(space5 + star);
    star += `**`;
    space5 = space5.substr(1);
}

for (let k: number = (lineCount - 1)/2; k > 0; k--) {
    space5 = space5.substr(1);
} for (let l: number = (lineCount)/2; l > 0; l--) {
    console.log(space5 + star);
    star = star.substr(1, star.length - 2);
    space5 += ` `;
}
