`use strict`

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
let array: number[] = [34, 12, 24, 9, 5];
function bubble(arr: any, boolean: boolean) {
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length; j++) {
            if (boolean === true) {
                if (arr[j] < arr[j + 1]) {
                    let temp: number[] = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else {
                if (arr[j] > arr[j + 1]) {
                    let temp: number[] = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    {
                    }
                }
            }
        }
    } return arr;
}
console.log(bubble(array, false));
console.log(bubble(array, true));