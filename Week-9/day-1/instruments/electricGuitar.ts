`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class ElectricGuitar extends StringedIstruments {
  constructor(numberOfString?: number) {
    super();
    this._name = `Electric Guitar`;
    this._numberOfStrings = numberOfString ?? 6;
  }
  public sound() {
    console.log(`Twang`);
  }
}
