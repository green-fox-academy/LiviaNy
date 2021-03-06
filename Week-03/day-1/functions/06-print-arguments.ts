`use strict`;

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

// function printParams(...input: any) {
//     console.log(input);
// }

let printParams: (...input: any) => void = function (...input) {
  return console.log(input);
};

printParams(`i`, `will`, `print`, `411`);
