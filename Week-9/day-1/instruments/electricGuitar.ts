`use strict`;
import { stringedIstruments } from './stringedInstruments';

export class ElectricGuitar extends stringedIstruments {
  constructor(numberOfInstruments: number, name: string) {
    super(6, `Electric Guitar`);
  }
  play() {
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
  sound() {
    console.log(`Twang`);
  }
}
