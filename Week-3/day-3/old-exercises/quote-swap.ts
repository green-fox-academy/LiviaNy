'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
function quoteSwap(inputArray: string[]): string {
  let wrongWord: string[] = inputArray.splice(6, 1);
  inputArray.splice(3, 0, wrongWord.toString());
  return inputArray.join(` `);
}
export = quoteSwap;
