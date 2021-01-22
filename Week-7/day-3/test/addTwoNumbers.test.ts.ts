import { addTwoNumbers } from './add';
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

test(`addTwoNumbers:add two numbers correctly`, (t) => {
  const actual = addTwoNumbers(2, 3);
  const expected = 5;
  t.equal(actual, expected);
  t.end();
});
