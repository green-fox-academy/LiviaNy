import { Aircraft } from './Aircraft';

`use strict`;

export class Carrier {
  protected _aircrafts: Aircraft[];
  protected _storeOfAmmo: number;
  protected _initiamAmmo: number;
  protected _health: number;

  constructor(initialAmmo, health) {
    this._health = health;
    this._initiamAmmo = initialAmmo;
  }

  add(aircraft: Aircraft) {
    this._aircrafts.push(aircraft);
  }
}
