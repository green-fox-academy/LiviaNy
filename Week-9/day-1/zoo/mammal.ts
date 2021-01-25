`use strict`;
import { Animals } from './animals';

export class Mammal extends Animals {
  constructor(name: string) {
    super();
    this._name = name;
  }

  breed() {
    console.log(`pushing miniature versions out`);
  }
}
