// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from "./../animal/animal";

class Farm {
  animals: Animal[];
  slots: number = 3;
  constructor(listOfAnimals: Animal[]) {
    this.animals = listOfAnimals;
  }
  breed(newAnimal: Animal): void {
    if (this.slots > 0) {
      this.animals.push(newAnimal);
      this.slots--;
    } else if (this.slots === 0) {
      console.log(`The farm is full`);
    } else {
      console.log(`error`);
    }
  }
  slaughter(): void {
    let hunger: number[] = [];
    for (let i: number = 0; i < this.animals.length; i++) {
      hunger.push(this.animals[i].hunger);
    }
    let smallestHunger: number = Math.min(...hunger);
    let indexOfSmallestNumber: number = hunger.indexOf(smallestHunger);
    this.animals.splice(indexOfSmallestNumber, 1);
    this.slots++;
  }
}

let theFarm = new Farm([]);
let cat = new Animal(`Cat`);
let dog = new Animal(`Dog`);
let bird = new Animal(`Bird`);
let elephant = new Animal(`Elephant`);
theFarm.breed(cat);
theFarm.breed(dog);
theFarm.breed(bird);
theFarm.breed(elephant);
console.log(theFarm);
dog.play();
dog.play();
cat.play();
dog.play();
cat.play();
dog.play();
bird.play();
console.log(theFarm);
theFarm.slaughter();
console.log(theFarm);
