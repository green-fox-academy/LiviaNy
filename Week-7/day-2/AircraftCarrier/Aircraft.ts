export class Aircraft {
  protected _ammoStorage: number;
  protected _maxAmmo: number;
  protected _baseDamage: number;
  protected _type: string;
  protected _status: string;

  constructor(maxAmmo?: number, baseDamage?: number) {
    this._ammoStorage = 0;
    this._maxAmmo = maxAmmo ?? 10;
    this._baseDamage = baseDamage ?? 0;
  }

  fight(): number {
    let damage: number = this._ammoStorage * this._baseDamage;
    this._ammoStorage = 0;
    return damage;
  }

  refill(loadAmount: number) {
    if (loadAmount === 0 || this._ammoStorage >= this._maxAmmo) {
      return loadAmount;
    } else {
      this._ammoStorage++;
      loadAmount--;
      return this.refill(loadAmount);
    }
  }
}

let aircraft: Aircraft = new Aircraft();
console.log(aircraft.refill(50));
console.log(aircraft);
