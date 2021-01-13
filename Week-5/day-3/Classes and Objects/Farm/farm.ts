// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from "./../animal/animal"
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};


class Farm{
    animals:Animal[]
    slots:number = 3
    constructor(listOfAnimals:Animal[]){
        this.animals = listOfAnimals
    }
    breed(newAnimal:Animal):void{
        if (this.slots > 0){
        this.animals.push(newAnimal);
        this.slots--
        } else if (this.slots === 0) {
            console.log(`The farm is full`)
        } else {
            console.log(`error`)
        }
    }
//     slaughter(){
//     bubbleSort(this.animals);
//     console.log(this.animals)

// }
}



let theFarm = new Farm([]);
let cat = new Animal(`Cat`)
let dog = new Animal(`Dog`);
let bird = new Animal(`Bird`);
let elephant = new Animal(`Elephant`);
theFarm.breed(cat);
theFarm.breed(dog)
theFarm.breed(bird);
theFarm.breed(elephant)
console.log(theFarm)
