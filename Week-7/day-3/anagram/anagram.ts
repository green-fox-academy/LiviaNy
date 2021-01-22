`use strict`;

export function anagram(word1: string, word2: string): boolean {
  let array1: string[] = Array.from(word1).sort();
  let array2: string[] = Array.from(word2).sort();
  if (array1.length !== array2.length) {
    return false;
  } else {
    let result: boolean = false;
    for (let i: number = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}
