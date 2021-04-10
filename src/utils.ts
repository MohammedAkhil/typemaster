export const words = (c: number) => c / 5;

export const minutes = (s: number) => s / 60;

export const wpm = (c: number, s: number) => {
  return Math.round(words(c) / minutes(s)) || 0;
};

export const countCorrectCharacters = (text: string, input: string) => {
  const tc = text.replace(' ', '');
  const ic = input.replace(' ', '');
  return ic.split('').filter((c, i) => c === tc[i]).length;
};

export const netWpm = (text: string, input: string, s: number) => {
  const c = countCorrectCharacters(text, input);
  return Math.round(words(c) / minutes(s)) || 0;
};

export const countCorrectWords = (text: string, input: string) => {
  const allWords = text.split(' ');
  const inputWords = input.split(' ');

  const totalPoints = inputWords.reduce((points, typedWord, i) => {
    points += allWords.includes(typedWord) ? 10 : -5;
    return points;
  }, 0);
  return totalPoints;
};

export const isComplete = (
  input: string,
  text: string,
  timerId?: number
): boolean => {
  return !!!timerId && input.length >= text.length;
};

export function areKeysPressed(
  keys: string[] = [],
  keysPressed: Set<string> = new Set([])
) {
  const required = new Set(keys);
  for (let elem of keysPressed) {
    required.delete(elem);
  }
  return required.size === 0;
}
