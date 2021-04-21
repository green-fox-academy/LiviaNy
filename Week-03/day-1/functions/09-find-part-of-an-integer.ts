'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example
//console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'

let arrayToCheck: number[] = [1, 11, 34, 52, 61];

function findMatchingIndex(number: number, array: number[]): number[] {
  let newArray: number[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (array[i].toString().indexOf(number.toString()) >= 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(findMatchingIndex(9, arrayToCheck));
