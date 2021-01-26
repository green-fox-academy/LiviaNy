`use strict`;
import { Animals } from './animals';

export class Mammal extends Animals {
  constructor(name: string) {
    super();
    this._name = name;
  }

  breed(): string {
    return `pushing miniature versions out.`;
  }
}
