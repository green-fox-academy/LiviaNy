`use strict`;
import { Printable } from './printable';

export class Domino implements Printable {
  _ASide: number;
  _BSide: number;

  constructor(ASide?: number, BSide?: number) {
    this._ASide = ASide ?? 3;
    this._BSide = BSide ?? 2;
  }

  printAllFields() {
    console.log(`Domino A side: ${this._ASide}, B side: ${this._BSide}`);
  }
}
