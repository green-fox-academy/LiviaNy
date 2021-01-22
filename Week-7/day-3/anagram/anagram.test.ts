import { format } from 'path';
import { anagram } from './anagram';
import * as test from 'tape';

test(`two given arrays are anagrams, should return true`, (t) => {
  const actual = anagram(`silent`, `listen`);
  const expected = true;
  t.equal(actual, expected);
  t.end();
});
