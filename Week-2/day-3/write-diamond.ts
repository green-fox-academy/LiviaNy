let lineCount3: number = 4;
let star3:string = '*'

for (let i:number = 1, j:number = lineCount3 - i; i <= lineCount3; i++, j-- ){

        let space3: string = '';

for (let j:number = lineCount3 - i; j > 0; j--) {
    space3 += ' ';
    
}

console.log(space3+star3);
star3 += '**';

}
