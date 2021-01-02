// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
let input: number = 2
function calculateFactorial(i: number) {
    for (let j: number = 1; j <= input; j++) {
        input *= i;
    }
    return input;
}
console.log(calculateFactorial(input));