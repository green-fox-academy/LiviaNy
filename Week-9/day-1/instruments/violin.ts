`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class Violin extends StringedIstruments {
  constructor() {
    super(4);
    this._name = `Violin`;
  }
  sound() {
    console.log(`Screech`);
  }

  play() {
    console.log(`${this._name}, is a ${this._numberOfStrings}- stringed instrument that goes ${this.sound()}`);
  }
}
