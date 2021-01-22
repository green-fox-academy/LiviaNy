// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

export class NumbersArray {
  protected _name: string;
  protected _array: number[];

  constructor(name: string, array: number[]) {
    this._name = name;
    this._array = array;
  }
  sumArr(): number {
    if (this._array.length > 1) {
      return this._array.pop() + this.sumArr();
    } else if (this._array.length === 1) {
      return this._array[0];
    } else {
      return 0;
    }
  }
}
