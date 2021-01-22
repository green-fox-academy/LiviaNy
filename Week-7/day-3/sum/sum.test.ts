// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import { NumbersArray } from './sum';
import * as test from 'tape';

test(`should return the sum of array elemnts`, (t) => {
  const listOfNumbers: number[] = [1, 2, 3, 4, 5];
  const list1 = new NumbersArray(`list1`, listOfNumbers);
  const actual = list1.sumArr();
  const expected = 15;
  t.equal(actual, expected);
  t.end();
});

test(`should return 0`, (t) => {
  const listOfNumbers: number[] = [];
  const list1 = new NumbersArray(`list1`, listOfNumbers);
  const actual = list1.sumArr();
  const expected = 0;
  t.equal(actual, expected);
  t.end();
});
