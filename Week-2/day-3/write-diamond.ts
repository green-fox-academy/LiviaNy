`use strict`

let lines: number = 10;
let space5:string = ` `;
let star:string = `*`;

for(let i:number= 1; i < lines - 1; i++){
space5+=` `
} for(let j:number = 0; j < lines - 1; j++){
    console.log(space5+star);
    star+=`**`;
    space5 = space5.substr(1);
}

for(let k:number= lines - 1; k > 0; k--){
    space5 = space5.substr(1);
    } for(let l:number = lines - 1; l >= 0; l--){
        console.log(space5+star);
        star = star.substr(1 ,star.length - 2) ;
        space5 += ` `;
    
    }
