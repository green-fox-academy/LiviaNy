'use strict';

import { indexOf, split } from '../strings/simple-replace';

// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array1: string[], array2: string[]): string[] {
  let matchedList: string[] = [];
  for (let i: number = 0; i < (array2.length || array1.length); i++) {
    matchedList.push(array1[i]);
    matchedList.push(array2[i]);
  }
  let removeUndefined: number = matchedList.indexOf(undefined);
  matchedList.splice(removeUndefined, 1);
  return matchedList;
}
console.log(makingMatches(girls, boys));

export = makingMatches;
