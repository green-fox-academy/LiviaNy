`use strict`;
import { StringedIstruments } from './stringedInstruments';

export class Violin extends StringedIstruments {
  constructor(numberOfString?: number) {
    super();
    this._numberOfStrings = numberOfString ?? 4;
    this._name = `Violin`;
  }
  public sound(): string {
    return `Screech`;
  }
}
