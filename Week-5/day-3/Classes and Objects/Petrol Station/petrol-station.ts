// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

import { stat } from "fs";

class Station {
  gasAmount: number = 1000;

  refill(car: Car): void {
    this.gasAmount = this.gasAmount - car.capacity;
    car.capacity = car.carsGasAmount + car.capacity;
    console.log(
      `The car has been refilled, Gas station has ${this.gasAmount} fuel left, cars\`s fuel is ${car.capacity}`
    );
  }
}

class Car {
  carsGasAmount: number;
  capacity: number;
  constructor(carsGasAmount: number, capacity: number) {
    this.carsGasAmount = carsGasAmount;
    this.capacity = capacity;
  }
}

let ferrari = new Car(0, 100);
let station = new Station();
station.refill(ferrari);
