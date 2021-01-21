`use strict`;

class Person {
  _name: string;
  _age: number;
  _gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this._name = name ?? `Jane Doe`;
    this._age = age ?? 30;
    this._gender = gender ?? `female`;
  }

  introduce(): void {
    console.log(`My name is ${this._name}, a ${this._age} year old ${this._gender}`);
  }

  getGoal(): void {
    console.log(`My goal is: Live for the moment!`);
  }
}

class Students extends Person {
  _previousOrganization: string;
  _skippedDays: number = 0;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization ?? `The School of Life`;
  }

  getGoal(): void {
    console.log(`My goal is: Be a junior software developer.`);
  }

  introduce(): void {
    console.log(
      `Hi, I\`m ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`
    );
  }

  skipDays(numberOfDays: number): number {
    return this._skippedDays + numberOfDays;
  }
}

class Mentor extends Person {
  _level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender);
    this._level = level ?? `intermediate`;
  }
}

const livia = new Students(`Livia`, 29, `female`, `GreenFox Academy`);

livia.introduce();
