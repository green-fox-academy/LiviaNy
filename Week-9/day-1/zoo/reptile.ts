`use strict`;
import { sup } from 'Week-3/day-3/simple-replace';
import { Animals } from './animals';

export class Reptile extends Animals {
  constructor(name: string) {
    super();
    this._name = name;
  }

  breed(): string {
    return `laying eggs`;
  }
}
