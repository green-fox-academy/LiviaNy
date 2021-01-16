// Find the greatest common divisor of two numbers using recursion.

import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { builtinModules } from 'module';

function commonDivisor(x: number, y: number): number {
  if (y) {
    return commonDivisor(y, x % y);
  } else {
    return Math.abs(x);
  }
}

console.log(commonDivisor(66, 72));
