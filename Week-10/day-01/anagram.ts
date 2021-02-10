export function anagram(string1: string, string2: string): boolean {
  string1 = string1.split(``).sort().join(``);
  string2 = string2.split(``).sort().join(``);
  if (string1 !== string2) {
    return false;
  }
  return true;
}
