'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(sweetsArray): string[] {
  //   for (let i: number = 0; i < sweetsArray.length; i++) {
  //     if (sweetsArray[i] === 2) {
  //       sweetsArray.splice(i, 1);
  //       sweetsArray.splice(i, 0, `Croissant`);
  //     } else if (sweetsArray[i] === false) {
  //       sweetsArray.splice(i, 1);
  //       sweetsArray.splice(i, 0, `Ice Cream`);
  //     }
  //   }
  sweetsArray.splice(1, 1, `Croissant`);
  sweetsArray.splice(3, 1, `Ice Cream`);
  return sweetsArray;
}

console.log(sweets(shopItems));

export = sweets;
