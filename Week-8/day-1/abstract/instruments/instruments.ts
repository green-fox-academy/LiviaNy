`use strict`;

export abstract class Instruments {
  public _name: string;
  public abstract play(): void;

  constructor() {
    this._name;
  }
}
