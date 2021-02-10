import * as test from 'tape';
import { anagram } from './anagram';
import { converter } from './number-converter';

test(`given 1 digit`, (t) => {
  const actual = converter(1);
  const expected = `one`;

  t.equal(actual, expected);
  t.end();
});

test(`given 2 digit`, (t) => {
  const actual = converter(11);
  const expected = `eleven`;

  t.equal(actual, expected);
  t.end();
});

test(`given 2 digit numbers over 19`, (t) => {
  const actual = converter(21);
  const expected = `twenty-one`;

  t.equal(actual, expected);
  t.end();
});

test(`number 20 shoud return "twenty" `, (t) => {
  const actual = converter(20);
  const expected = `twenty`;

  t.equal(actual, expected);
  t.end();
});
