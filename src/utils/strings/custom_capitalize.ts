/** @format */

import { capitalize } from "lodash";

/**
 * Capitalizes the first letter of a string or each substring separated by a specified character.
 *
 * @function
 * @param {Object} params - The parameters for capitalization.
 * @param {string} params.string - The string to be capitalized.
 * @param {string} params.character - The character used to split the string.
 * @returns {string} The capitalized string or capitalized substrings joined by the specified character.
 * @example
 * const capitalizedString = customCapitalize({ string: 'hello-world', character: '-' });
 * console.log(capitalizedString); // "Hello-World"
 *
 * @note This function assumes the `capitalize` function is available in the scope to capitalize individual strings.
 */
const customCapitalize = ({ string, character }: {string: string; character: string}): string => {
  if (string.includes(character)) return string.split(character).map(capitalize).join(character);
  return capitalize(string);
};

export default customCapitalize;
