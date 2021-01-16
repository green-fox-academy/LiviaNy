// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(param: number): number {
  if (param <= 1) {
    return 1;
  } else {
    return param + numberAdder(param - 1);
  }
}

console.log(numberAdder(6));
