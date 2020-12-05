let lines: number = 5;
let space:string = ` `;
let star:string = `*`;

for(let i:number= 1; i < lines - 1; i++){
space+=` `
} for(let j:number = 0; j < lines - 1; j++){
    console.log(space+star);
    star+=`**`;
    space = space.substr(1);
}

for(let k:number= lines - 1; k > 0; k--){
    space = space.substr(1);
    } for(let l:number = lines - 1; l >= 0; l--){
        console.log(space+star);
        star = star.substr(1 ,star.length - 2) ;
        space += ` `;
    
    }
