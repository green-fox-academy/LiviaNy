`use strict`;

export class Plant {
  protected _colour: string;
  protected _name: string;
  protected _waterLevel: number;
  // _needsWater: boolean;
  protected _absorbtionRate: number;
  protected _criticalWaterLevel: number;

  constructor(criticalWaterLevel: number, absorption: number, colour: string, name: string) {
    this._colour = colour;
    this._absorbtionRate = absorption;
    this._criticalWaterLevel = criticalWaterLevel;
    this._name = name;
    this._waterLevel = 0;
    // this._needsWater = true;
  }

  public needsWater(): boolean {
    return this._waterLevel < this._criticalWaterLevel;
  }

  public water(amount: number): void {
    this._waterLevel += amount * this._absorbtionRate;
  }

  public showInfo(): void {
    console.log(`The ${this._colour} ${this._name} ${this.needsWater() === true ? `needs` : `doesn\`t need`} water.`);
    // if (this.needsWater() === true) {
    //   console.log(`The ${this._colour} ${this._name} needs water.`);
    // } else {
    //   console.log(`The ${this._colour} ${this._name} doesnt need water.`);
    // }
    // }
  }
}
