'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

function checkNums(listOfNumbers: number[]) {
  for (let i: number = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(4 || 8 || 12 || 16) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
export = checkNums;
