//We are going to represent our expenses in a list containing integers.

import { fontcolor } from "../simple-replace";

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
function app() {
    console.log(`You spent: ` + expenses.reduce((a, b) => a + b));
    console.log(`Your greatest expense: ` + expenses.reduce((c,d) => Math.max(c,d)))
    console.log(`Your cheapest spending was: ` + expenses.reduce((e,f) => Math.min(e, f)));
    console.log(`Your average sending was: ` + ((expenses.reduce((a,b) => a + b) / expenses.length)));
    return ``
}
console.log(app())