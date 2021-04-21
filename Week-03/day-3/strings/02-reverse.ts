'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

//  function reverse(arr){
//      arr = arr.split(``);
//      let newArr:string[]=[]
//      for(let i:number = arr.lenght - 1; i >= 0; i--){
//          newArr.push(arr[i]);
//          arr = newArr.join(``);
//      return arr
//  }
//  }

function reverse(x: string): string {
  let reversedString: string[] = [];
  reversedString = x.split(``).reverse();
  return reversedString.join(``);
}

console.log(reverse(toBeReversed));

export = reverse;
