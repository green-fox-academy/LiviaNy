// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countLetters(text: any): Object {
  let dictionary: Object = {};
  let stringArray: any[] = Array.from(text);
  for (let i: number = 0; i < stringArray.length; i++) {
    let value: number = 0;
    for (let j: number = 0; j < stringArray.length; j++) {
      if (stringArray[j] === stringArray[i]) {
        value++;
      }
    }
    dictionary[stringArray[i]] = value;
  }
  return dictionary;
}
