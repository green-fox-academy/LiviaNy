`use strict`;

import { Aircraft } from './Aircraft';

export class F16 extends Aircraft {
  constructor() {
    super(`F16`, 8, 30);
  }
}
