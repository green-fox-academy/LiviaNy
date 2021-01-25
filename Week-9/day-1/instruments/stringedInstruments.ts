`use strict`;
import { Instruments } from './instruments';

export abstract class StringedIstruments extends Instruments {
  _numberOfStrings: number;
  abstract sound(): void;

  constructor() {
    super();
    this._numberOfStrings;
  }
  play(): void {}
}
