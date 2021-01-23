import { countLetters } from './countLetters';
import * as test from 'tape';

test(`should return a dictionary with letters`, (t) => {
  const actual = countLetters(`livianyitrai`);
  const expected = {
    l: 1,
    i: 4,
    v: 1,
    a: 2,
    n: 1,
    y: 1,
    t: 1,
    r: 1,
  };
  t.deepEqual(actual, expected);
  t.end();
});

test(`should return a dictionary with numbers`, (t) => {
  const actual = countLetters(`1234512`);
  const expected = {
    1: 2,
    2: 2,
    3: 1,
    4: 1,
    5: 1,
  };
  t.deepEqual(actual, expected);
  t.end();
});
