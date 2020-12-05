// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input:number = 5;
let output:number = 0;
for(let sum:number = 1; sum <= input; sum++ ){
   output = output + sum;
}
console.log(`sim: ` + output);
console.log(`average: ` + output / input);

