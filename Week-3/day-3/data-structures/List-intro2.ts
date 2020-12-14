//Create a list ('List A') which contains the following values

import { length, link } from "../simple-replace";

//Apple, Avocado, Blueberries, Durian, Lychee
let ListA: string[] = [`Apple`, `Avocado`, `Blueberries`, `Durian`, `Lychee`];
//Create a new list ('List B') with the values of List A
let ListB: string[] = /*ListA*/ [`Apple`, `Avocado`, `Blueberries`, `Durian`, `Lychee`];
//Print out whether List A contains Durian or not
let include = ListA.includes(`Durian`)
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
