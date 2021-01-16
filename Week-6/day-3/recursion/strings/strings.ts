// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function xToY(string: string): string {
  if (string.indexOf(`x`) === -1) {
    return string;
  } else {
    return xToY(string.replace(`x`, `y`));
  }
}

console.log(xToY(`Whx did xou spell it wrong?`));
