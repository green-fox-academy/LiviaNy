`use strict`;

import { Plant } from './Plant';

export class Flower extends Plant {
  constructor(colour: string) {
    super(5, 0.75, colour, `Flower`);
  }
}
