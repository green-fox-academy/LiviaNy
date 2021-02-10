import * as test from 'tape';
import { anagram } from './anagram';

test(``, (t) => {
  const actual = anagram(`alma`, `repa`);
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test(``, (t) => {
  const actual = anagram(`alma`, `alma`);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test(``, (t) => {
  const actual = anagram(`alma`, `lama`);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
