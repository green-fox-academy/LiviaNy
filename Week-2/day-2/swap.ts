'use strict';
// Swap the values of these variables

//1st opt
var numberToSwap1: number = 123;
var numberToSwap2: number = 526;

[numberToSwap1, numberToSwap2] = [numberToSwap2, numberToSwap1];
console.log(numberToSwap1);
console.log(numberToSwap2);

//2nd opt
var numberToSwap1: number = 123;
var numberToSwap2: number = 526;
var temp;

numberToSwap1 = numberToSwap1 + numberToSwap2;
numberToSwap2 = numberToSwap1 - numberToSwap2;
numberToSwap1 = numberToSwap1 - numberToSwap2;
console.log(numberToSwap1);
console.log(numberToSwap2);

//3rd opt
var numberToSwap1: number = 123;
var numberToSwap2: number = 526;

temp = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = temp;
console.log(numberToSwap1);
console.log(numberToSwap2);