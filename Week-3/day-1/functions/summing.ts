`use strict`

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

let length1: number = 10;

// function sum(a: number) {
//     return ((a * (a + 1) / 2));
// }
// console.log(sum(length));

let sum: (a: number) => number = function (
    a: number
) {
    return ((a * (a + 1) / 2));
}

console.log(sum(length1));