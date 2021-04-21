`use strict`;
import { Plant } from './Plant';

export class Garden {
  private _plants: Plant[] = [];

  public addPland(newPlant: Plant): void {
    this._plants.push(newPlant);
  }

  waterThem(wateringAmount: number): void {
    let thirstyPlants: Plant[] = this._plants.filter((plant) => plant.needsWater() === true);
    let totalWatering: number = wateringAmount / thirstyPlants.length;

    console.log(`\nWatering with ${wateringAmount}.`);
    // for (let i:number = 0; i < thirstyPlants.length; i++){
    //   thirstyPlants[i].water(totalWatering)
    // }
    thirstyPlants.forEach((plant: Plant) => plant.water(totalWatering));
  }

  public showAllInfo(): void {
    this._plants.forEach((plant: Plant) => plant.showInfo());
  }
}
