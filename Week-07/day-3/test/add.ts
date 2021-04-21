`use strict`;

export function addTwoNumbers(a: number, b: number): number {
  if (a < 0 || b < 0) {
    return null;
  }
  return a + b;
}

export function removeLastElement(array: number[]): number[] {
  array.pop();
  return array;
}
