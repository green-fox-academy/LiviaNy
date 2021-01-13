// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { count } from "console";
import { unwatchFile } from "fs";
import { Sharpie } from "./../sharpie/sharpie";

class SharpieSet {
  SharpieSet: Sharpie[];
  constructor(sharpieSet: Sharpie[]) {
    this.SharpieSet = sharpieSet;
  }

  countUsable(): void {
    let usableSharpies: number = 0;
    for (let i: number = 0; i < this.SharpieSet.length; i++) {
      if (this.SharpieSet[i].inkAmount !== 0) {
        usableSharpies++;
      }
    }
    console.log(`TYou have ` + usableSharpies + ` sharpie felt.`);
  }

  removeTrash(): void {
    for (let i: number = 0; i < this.SharpieSet.length; i++) {
      if (this.SharpieSet[i].inkAmount === 0) {
        this.SharpieSet.splice(i, 1);
      }
    }
  }
}

let blueSharpie = new Sharpie(`blue`, 10);
let yellowSharpie = new Sharpie(`yellow`, 10);
let pinkSharpie = new Sharpie(`pink`, 10);
let firstSetOfSharpie = new SharpieSet([
  blueSharpie,
  yellowSharpie,
  pinkSharpie,
]);
console.log(firstSetOfSharpie);
firstSetOfSharpie.countUsable();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
yellowSharpie.use();
console.log(firstSetOfSharpie);
firstSetOfSharpie.removeTrash();
firstSetOfSharpie.countUsable();
