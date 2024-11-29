export function multiplyWords(word: string, times: number): string {
  let words: string = "";
  for (let count = 0; count < times; count++) {
    words = words.concat(word).concat(" ");
  }
  words.trim();
  return words;
}
