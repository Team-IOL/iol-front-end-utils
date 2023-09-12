/** @format */

/**
 * Removes all spaces from a string and converts it to lowercase.
 *
 * @function
 * @param {string} string_param - The string from which spaces need to be removed and then converted to lowercase.
 * @returns {string} The modified string without spaces and in lowercase.
 * @example
 * const modifiedString = stringRemoveSpaceLowercase("Hello World");
 * console.log(modifiedString); // "helloworld"
 *
 * @note This function uses regular expressions to remove spaces from the string.
 */
const stringRemoveSpaceLowercase = (string_param: string): string => string_param?.replace(/\s+/g, "")?.toLowerCase();
export default stringRemoveSpaceLowercase;
