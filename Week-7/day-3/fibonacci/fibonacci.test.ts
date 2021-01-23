import { fibonacci } from './fibonacci';
import * as test from 'tape';

test(`should return fibonaci number of an argument`, (t) => {
  const actual = fibonacci(14);
  const expected = 377;

  t.equal(actual, expected);
  t.end();
});

test(`should return fibonaci number of 0`, (t) => {
  const actual = fibonacci(0);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});
