export function converter(number: number): string {
  const characters: string[] = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
  return characters[number];
}
