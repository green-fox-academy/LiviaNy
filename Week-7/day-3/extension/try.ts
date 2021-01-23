export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some((vowel) => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c[i]}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}

console.log(translate(`teve`));
