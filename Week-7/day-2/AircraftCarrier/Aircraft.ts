export class Aircraft {
  protected _ammoStorage: number;
  protected _maxAmmo: number;
  protected _baseDamage: number;
  protected _type: string;
  protected _status: string;
  protected _allDamage: number;

  constructor(type?: string, maxAmmo?: number, baseDamage?: number) {
    this._ammoStorage = 0;
    this._maxAmmo = maxAmmo ?? 10;
    this._baseDamage = baseDamage ?? 0;
    this._type = type;
    this._allDamage = this._ammoStorage * this._baseDamage;
  }

  fight(): number {
    let damage: number = this._ammoStorage * this._baseDamage;
    this._ammoStorage = 0;
    return damage;
  }

  refill(loadAmount: number): number {
    if (loadAmount === 0 || this._ammoStorage >= this._maxAmmo) {
      return loadAmount;
    } else {
      this._ammoStorage++;
      loadAmount--;
      return this.refill(loadAmount);
    }
  }

  getType(): string {
    return this._type;
  }

  getStatus(): string {
    return `Type: ${this._type}, Ammo: ${this._ammoStorage}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`;
  }

  isPriority(): boolean {
    if (this._type === `F35`) {
      return true;
    } else {
      return false;
    }
  }
}

let aircraft: Aircraft = new Aircraft();
console.log(aircraft.refill(50));
console.log(aircraft);
