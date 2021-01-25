`use strict`;
import { Instruments } from './instruments';

export abstract class StringedIstruments extends Instruments {
  public _numberOfStrings: number;
  public abstract sound(): void;

  constructor() {
    super();
  }

  play(): void {
    console.log(`${this._name}, is a ${this._numberOfStrings}- stringed instrument that goes ${this.sound()}.`);
  }
}
