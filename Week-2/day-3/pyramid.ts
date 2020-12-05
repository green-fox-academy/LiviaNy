
let lineCount: number = 4;
let star:string = '*'

for (let i:number = 1, j:number = lineCount - i; i <= lineCount; i++, j-- ){

        let space: string = '';

for (let j:number = lineCount - i; j > 0; j--) {
    space += ' ';
    
}

console.log(space+star);
star += '**';

}
