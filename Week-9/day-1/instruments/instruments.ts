`use strict`;

export abstract class Instruments {
  _name: string;
  abstract play(): void;

  constructor() {
    this._name;
  }
}
