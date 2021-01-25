`use strict`;

abstract class Animals {
  _name: string;
  _age: number;
  _speed: number;
  _gender: string;

  constructor() {
    this._name;
    this.breed;
  }

  getName(): string {
    return this._name;
  }

  abstract breed(): void;
}
