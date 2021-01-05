// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
let input: number = 7;

function calculateFactorial(i: number): any {
    if (i > 1) {
        return i * calculateFactorial(i - 1);
    } else if (i < 0) {
        return `Require positive number`;
    } else {
        return 1;
    }
}
console.log(calculateFactorial(input));