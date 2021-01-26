`use strict`;
import { Animals } from './animals';

export class Bird extends Animals {
  constructor(name: string) {
    super();
    this._name = name;
  }
  breed(): string {
    return `laying egg.`;
  }
}
