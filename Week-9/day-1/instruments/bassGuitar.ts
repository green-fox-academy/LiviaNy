`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class BassGuitar extends StringedIstruments {
  constructor() {
    super(4, `Bass Guitar`);
  }
  play() {
    console.log(`${this._name}, a ${this._numberOfStrings}- stringed instrumant that goes ${this.sound}.`);
  }
  sound() {
    console.log(`Dumm-dumm-dumm`);
  }
}
