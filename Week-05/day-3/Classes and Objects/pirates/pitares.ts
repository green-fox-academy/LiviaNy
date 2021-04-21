import { stat, truncate } from 'fs';

export class Pirate {
  intoxicationLevel: number = 0;
  passedOut: boolean = false;
  alive: boolean = true;
  status: string = `alive`;
  isCaptain: boolean = false;
  constructor() {
    this.alive;
  }

  drinkSomeRum(): number {
    if (this.intoxicationLevel < 4) {
      return this.intoxicationLevel++;
    } else {
      this.status = `Passed out`;
      console.log(status);
    }
  }
  howIsGoingMate(): void {
    if ((this.alive = true)) {
      if (this.intoxicationLevel > 0 && this.intoxicationLevel < 4) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I\`ma Pirate. How d\`ya d\`ink its going?`);
        this.passedOut = true;
      }
    } else if ((this.alive = false)) {
      console.log(`he\`s dead.`);
    }
  }

  die(): boolean {
    return (this.alive = false);
  }

  brawl(pirate: Pirate): void {
    let chance: number = Math.random();
    if ((pirate.alive = true) && (this.alive = true)) {
      if (chance <= 0.33) {
        this.die();
      } else if (chance > 0.33 || chance < 0.66) {
        pirate.die();
      } else {
        this.passedOut;
        pirate.passedOut;
      }
    } else {
      console.log(`he\`s dead.`);
    }
  }
}
