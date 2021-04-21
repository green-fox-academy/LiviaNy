// Given a string, compute recursively a new string where all the 'x' chars have been removed.

import { stat } from 'fs';

function removeX(string: string): string {
  if (string.indexOf(`x`) === -1) {
    return string;
  } else {
    return removeX(string.replace(`x`, ``));
  }
}

console.log(removeX(`saxxxy soxxmxxxextxxxxhxxxixxxnxxxxxg`));
