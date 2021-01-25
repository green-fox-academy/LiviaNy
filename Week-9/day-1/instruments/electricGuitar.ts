`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class ElectricGuitar extends StringedIstruments {
  constructor() {
    super(6);
    this._name = `Electric Guitar`;
  }
  play() {
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
  sound() {
    console.log(`Twang`);
  }
}
