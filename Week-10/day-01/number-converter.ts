export function converter(number: number) {
  const singleDigit: string[] = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
  const twoDigits: string[] = [
    ``,
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
  const threeDigits: string[] = [
    ``,
    `ten`,
    `twenty`,
    `thirty`,
    `fourty`,
    `fifty`,
    `sixty`,
    `seventy`,
    `eighty`,
    `ninety`,
  ];
  const fourDigits: string[] = [``, `hundred`, `thousand`];
  if (number.toString().split(``).length === 1) {
    return singleDigit[number];
  } else if (number > 10 && number < 20) {
    return twoDigits[parseInt(number.toString().split(``)[1])];
  } else if (parseInt(number.toString().split(``)[number.toString().split(``).length - 1]) === 0) {
    return threeDigits[parseInt(number.toString().split(``)[0])];
  } else if (number > 20 && number < 100) {
    return (
      threeDigits[parseInt(number.toString().split(``)[0])] +
      `-` +
      singleDigit[parseInt(number.toString().split(``)[1])]
    );
  } else if (number > 100) {
    return (
      fourDigits[parseInt(number.toString().split(``)[0])] +
      ` and ` +
      threeDigits[parseInt(number.toString().split(``)[1])] +
      `-` +
      singleDigit[parseInt(number.toString().split(``)[2])]
    );
  }
}
