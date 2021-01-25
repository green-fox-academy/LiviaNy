`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class BassGuitar extends StringedIstruments {
  constructor(numberOfString?: number) {
    super();
    this._name = `Bass Guitar`;
    this._numberOfStrings = numberOfString ?? 4;
  }
  public sound() {
    console.log(`Dumm-dumm-dumm`);
  }
}
