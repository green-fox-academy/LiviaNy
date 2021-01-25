`use strict`;

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
