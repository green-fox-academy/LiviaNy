//Create a list ('List A') which contains the following values

import { link } from "../simple-replace";

//Apple, Avocado, Blueberries, Durian, Lychee
let ListA: string[] = [`Apple`, `Avocado`, `Blueberries`, `Durian`, `Lychee`];
//Create a new list ('List B') with the values of List A
let ListB: string[] = ListA;
//Print out whether List A contains Durian or not
 let include = ListA.includes(`Durian`)
    if ( include = true) {
        console.log(`ListA includes Durian`);
    } else if (include = false) {
        console.log(`Durian is not within ListA`);
    } else {
        console.log(`error`);
    }

