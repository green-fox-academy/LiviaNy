// Write a function that finds the largest element of an array using recursion.

let arrayNumbers: number[] = [4, 10, 5, 99, 3];

function findMax(array: number[]): number {
  let newArr: number[] = array.slice();
  if (newArr.length === 1) {
    return newArr[0];
  }
  if (newArr[0] < newArr[1]) {
    newArr.splice(0, 1);
  } else {
    newArr.splice(1, 1);
  }
  return findMax(newArr);
}

console.log(findMax(arrayNumbers));
