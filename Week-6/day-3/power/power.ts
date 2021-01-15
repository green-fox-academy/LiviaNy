// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(x: number, y: number) {
  if (y === 0) {
    return 1;
  } else {
    return x * powerN(x, y - 1);
  }
}
console.log(powerN(3, 2));
