import { addTwoNumbers, removeLastElement } from './add';
import * as test from 'tape';

test(`addTwoNumbers:add two numbers correctly`, (t) => {
  t.equal(3 + 2, 5);
  t.end();
});

// let test = require(`tape`).test;
// let add = require('./add');
// test(`add: add two numbers correctly`, function (t) {
//   let actual = add(1, 2);
//   let expect = 3;
//   t.equal(actual, expect);
//   t.end();
// });

test(`should add 2 numbers`, (t) => {
  const actual = addTwoNumbers(2, 3);
  const expected = 5;
  t.equal(actual, expected);
  t.end();
});

test(`should return null with negative number`, (t) => {
  const actual = addTwoNumbers(-2, 3);
  const expected = null;
  t.equal(actual, expected);
  t.end();
});

test(`should remove last element`, (t) => {
  const testArray: number[] = [1, 2, 3, 4];
  const actual = removeLastElement(testArray);
  const expected = [1, 2, 3];
  //array es object vizsgalat (melysegeben nezi meg)
  t.deepEqual(actual, expected);
  t.end();
});
