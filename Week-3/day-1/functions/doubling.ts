'use strict';
// -  Create a variable named `baseNumber` and assign the value `123` to it
// -  Create a function called `doubleNumber()` that doubles it's input parameter
//    and returns the doubled value
// -  Log the result of `doubleNumber(baseNumber)` to the console

let baseNumber: number = 123;

// function doubleNumber(baseNumber) {
//     console.log(baseNumber * 2);
//     return baseNumber;
// }

// doubleNumber(baseNumber);

let doubleNumber: (x: number) => void = function (
    x;
) {
    return console.log(x * 2);
}

doubleNumber(baseNumber);

