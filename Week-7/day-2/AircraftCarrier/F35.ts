`use strict`;

import { Aircraft } from './Aircraft';

export class F35 extends Aircraft {
  constructor() {
    super(`F35`, 12, 50);
  }
}
