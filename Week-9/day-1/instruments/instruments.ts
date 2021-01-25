`use strict`;

export abstract class Instruments {
  _name: string;
  abstract play(): void;

  constructor(name: string) {
    this._name = name;
  }
}
