/////NOT READY AT ALL//////
import { Pirate } from './pitares';

class Ship {
  crew: Pirate[] = [];

  constructor() {
    this.crew;
    this.fillShip();
  }

  fillShip() {
    this.crew.push(new Pirate());
    let randomPirates: number = Math.floor(Math.random() * 5);
    for (let i: number = 0; i <= randomPirates; i++) {
      this.crew.push(new Pirate());
    }
  }
}

let shipA = new Ship();
shipA.fillShip();
console.log(shipA);
console.log;

/////NOT READY AT ALL!!!!/////
