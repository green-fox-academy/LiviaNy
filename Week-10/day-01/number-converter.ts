export function converter(number: number) {
  const singleDigit: string[] = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
  const twoDigits: string[] = [
    `ten`,
    `eleven`,
    `twelve`,
    `thirteen`,
    `fourteen`,
    `fifteen`,
    `sixteen`,
    `seventeen`,
    `eighteen`,
    `nineteen`,
  ];
  if (number.toString().split(``).length === 1) {
    return singleDigit[number];
  } else {
    let index = parseInt(number.toString().split(``)[1]);
    return twoDigits[index];
  }
}
