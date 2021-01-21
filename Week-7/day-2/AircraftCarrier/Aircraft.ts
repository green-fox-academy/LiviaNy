class Aircrafts {
  _ammunition: number;
  _maxAmmo: number;
  _baseDamage: number;

  constructor() {
    this._ammunition = 0;
  }

  fight(): number {
    return this._ammunition * this._baseDamage;
  }
}

class F16 extends Aircrafts {
  constructor() {
    super();
    this._ammunition = 0;
    this._baseDamage = 30;
    this._maxAmmo = 8;
  }
}

class F35 extends Aircrafts {
  constructor() {
    super();
    this._ammunition = 0;
    this._baseDamage = 50;
    this._maxAmmo = 12;
  }
}
