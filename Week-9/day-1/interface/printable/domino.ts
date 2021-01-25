`use strict`;
import { Printable } from './printable';
export class Domino implements Printable {
  _ASide: number;
  _BSide: number;

  constructor() {
    this._ASide = 3;
    this._BSide = 2;
  }

  printableFields() {
    console.log(`Domino A side: ${this._ASide}, B side: ${this._BSide}`);
  }
}
