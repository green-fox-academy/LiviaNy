import { indexOf } from '../strings/simple-replace';

//Create an empty list which will contain names (strings)
let list: string[] = [];
//Print out the number of elements in the list
console.log(list.length);
//Add William to the list
list.push(`William`);
//Print out whether the list is empty or not
console.log(list);
//Add John to the list
list.push(`John`);
//Add Amanda to the list
list.push(`Amanda`);
//Print out the number of elements in the list
console.log(list.length);
//Print out the 3rd element
console.log(list[2]);
//Iterate through the list and print out each name
list.forEach((Element) => console.log(Element));
//Iterate through the list and print
for (const [index, element] of list.entries()) {
  console.log(index, element);
}
//Remove the 2nd element
list.splice(1, 1);
//Iterate through the list in a reversed order and print out each name
for (let i: number = list.length - 1; i >= 0; i--) {
  console.log(list[i]);
}
//Remove all elements
console.log(list.slice(2));
