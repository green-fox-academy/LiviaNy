import { Apple } from './apples';
import * as test from 'tape';

test(`getApple(myObject) should return apple`, (t) => {
  const myObject = new Apple();

  const actual = myObject.getApple(`apple`);
  const expected = `apple`;
  t.equal(actual, expected);
  t.end();
});

// test(`getApple(myObject) should return apple`, (t) => {
//   const myObject = new Apple();

//   const actual = myObject.getApple(`green`);
//   const expected = `apple`;
//   t.equal(actual, expected);
//   t.end();
// });
