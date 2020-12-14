//Create a list ('List A') which contains the following values

import { length, link } from "../simple-replace";

//Apple, Avocado, Blueberries, Durian, Lychee
let ListA: string[] = [`Apple`, `Avocado`, `Blueberries`, `Durian`, `Lychee`];
//Create a new list ('List B') with the values of List A
let ListB: string[] = /*ListA*/ [`Apple`, `Avocado`, `Blueberries`, `Durian`, `Lychee`];
//Print out whether List A contains Durian or not
let include = ListA.includes(`Durian`);
if (include = true) {
    console.log(`ListA includes Durian`);
} else if (include = false) {
    console.log(`Durian is not within ListA`);
} else {
    console.log(`error`);
}
//if (listA.indexOf('Durian') === -1){
//    console.log(`Durian is not in ListA`);
//} else {
//console.log(`Yes, Durian is within ListA`);
//}

//Remove Durian from List B
for (let i: number = 0; i < ListB.length; i++) {
    if (ListB[i] === `Durian`) {
        ListB.splice(i, 1);
    }
}
//Add Kiwifruit to List A after the 4th element
ListA.splice(4, 0, `Kiwifruti`);
//Compare the size of List A and List B
if( ListA.length > ListB.length) {
    console.log(`List A is ` + (ListA.length - ListB.length) + ` element longer than List B.`);
} else if (ListA.length < ListB.length) {
    console.log(`List A is ` + (ListB.length - ListA.length) + ` element shorter than List B.`);
} else {
    console.log(`The length of the two list are equal.`);
}
//Get the index of Avocado from List A
console.log(ListA.indexOf(`Avocado`));
//Get the index of Durian from List B
console.log(ListB.indexOf(`Durian`));
//Add Passion Fruit and Pomelo to List B in a single statement
ListB.push(`Passion Fruit`, `Pomelo`);
//Print out the 3rd element from List A
console.log(ListA[2]);