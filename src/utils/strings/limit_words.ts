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

/**
 * Calculates the number of words in a given text.
 *
 * @function
 * @param {string} [text=""] - The text whose word count needs to be determined. Defaults to an empty string.
 * @returns {number} The number of words in the text.
 * @example
 * const wordCount = getWordLength("Hello, how are you?");
 * console.log(wordCount); // 4
 *
 * @note This function splits the text based on whitespace to determine word count.
 */
export function getWordLength(text: string = ""): number {
  const words = text.split(/\s+/);
  return words.length;
}
