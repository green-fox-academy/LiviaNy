'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
function appendA(inputArray: string[]) {
  //   let newArray: string[] = [];
  //   for (let i: number = 0; i < inputArray.length; i++) {
  //     newArray.push(inputArray[i] + `a`);
  //   }
  //   return newArray;
  let newArray = inputArray.map((animal) => {
    return animal + `a`;
  });
  return newArray;
}
export = appendA;
