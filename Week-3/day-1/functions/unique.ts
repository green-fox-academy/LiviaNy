`use strict`

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
let arr: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
function unique(arr:any) {
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length; j++) {
            if (arr[j] === arr[j + 1]) {
                arr.splice(j, 1);
            } else if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else {

            }
        }
    } return arr;
}

//  Example
console.log(unique(arr))
//  should print: `[1, 11, 34, 52, 61]`