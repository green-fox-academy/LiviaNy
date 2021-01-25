`use strict`;

abstract class Instruments {
  _name: string;
  abstract play(): void;

  constructor(name) {
    this._name = name;
  }
}
