let test = require(`tape`).test;
let add = require('./add');
test(`add: add two numbers correctly`, function (t) {
  let actual = add(1, 2);
  let expect = 3;
  t.equal(actual, expect);
  t.end();
});
