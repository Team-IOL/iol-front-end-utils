/** @format */

// stringUtils.ts

/**
 * Limits the given text to a specified number of words.
 * @param text The original text.
 * @param wordLimit The maximum number of words.
 * @returns The limited text.
 */
export function limitWords(text: string, wordLimit: number): string {
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
}

export function getWordLength(text = ""): number {
  const words = text.split(/\s+/);
  return words.length;
}
