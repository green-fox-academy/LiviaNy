import { Aircraft } from './Aircraft';

`use strict`;

export class Carrier {
  protected _aircrafts: Aircraft[];
  protected _ammoStorage: number;
  protected _health: number;
  protected _totalDamage: number;

  constructor(initialAmmo: number, health: number) {
    this._health = health;
    this._ammoStorage = initialAmmo;
    this._aircrafts = [];
  }

  add(aircraft: Aircraft): void {
    this._aircrafts.push(aircraft);
  }

  fill(ammo: number): void {
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      if (this._aircrafts[i].isPriority() === true) {
        this._ammoStorage = this._aircrafts[i].refill(ammo);
      }
    }
    for (let y: number = 0; y < this._aircrafts.length; y++) {
      if (this._aircrafts[y].isPriority() === false) {
        this._ammoStorage = this._aircrafts[y].refill(ammo);
      } else if (this._ammoStorage === 0) {
        throw new Error(`The ammo storage is empty.`);
      }
    }
  }

  fight(carrier: Carrier): void {
    this._aircrafts.forEach((aircraft) => aircraft.fight());
    carrier._health -= this.getTotalDamage();
    if (carrier._health < 0) {
      carrier._health = 0;
    }
  }

  getTotalDamage(): number {
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      this._totalDamage += this._aircrafts[i].getAllDamage();
    }
    return this._totalDamage;
  }

  getStatus(): void {
    console.log(
      `HP: ${this._health}, Aircraft count: ${this._aircrafts}, Ammo Storage: ${this._ammoStorage}, Total Damage: ${this._totalDamage}`
    );

    this._aircrafts.forEach((x) =>
      console.log(
        `Type: ${x.getType()}, Ammo: ${x.getAmmo()}, Base damage: ${x.getBaseDamage()}, All Damage ${x.getAllDamage()}`
      )
    );

    if (this._health === 0) {
      console.log(`It\`s dead Jim`);
    }
  }
}
