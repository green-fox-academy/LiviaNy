`use strict`;

import { Plant } from './Plant';

export class Tree extends Plant {
  constructor(colour: string) {
    super(10, 0.4, colour, `Tree`);
  }
}
