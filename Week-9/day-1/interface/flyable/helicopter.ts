`use strict`;
import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super();
  }

  land() {
    console.log(`${this._name} lands in ${this._speed} seconds`);
  }

  fly() {
    console.log(`I fly very high.`);
  }

  takeOff() {
    console.log(`I land quicly.`);
  }
}
