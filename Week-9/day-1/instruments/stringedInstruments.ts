`use strict`;
import { Instruments } from './instruments';

export abstract class stringedIstruments extends Instruments {
  _numberOfStrings: number;
  abstract sound(): void;

  constructor(numberOfStrings: number, name: string) {
    super(name);
    this._numberOfStrings = numberOfStrings;
  }
  play(): void {}
}
