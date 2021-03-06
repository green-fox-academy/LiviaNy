'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
function containsSeven(numberArray: number[]): string {
  //   for (let i: number = 0; i < numbers.length; i++) {
  //     if (numberArray[i] === 7) {
  //       return `Hoorrayy`;
  //     } else {
  //       return `Nooooo`;
  //     }
  //   }
  if (numberArray.indexOf(7) === -1) {
    return `Noooo`;
  } else {
    return `Hoorrayy`;
  }
}
export = containsSeven;
