/** @format */
/**
 * Converts a given text to a Base64 data URI for PNG/JPEG images.
 *
 * @function
 * @param {string} text - The text to be converted to a Base64 data URI.
 * @returns {string} A Base64 data URI formatted for PNG/JPEG images.
 * @example
 * const base64Data = convertToBase64('yourBase64EncodedImageHere');
 * console.log(base64Data); // "data:image/png/jpeg;base64, yourBase64EncodedImageHere"
 *
 * @note This function assumes the provided text is a valid Base64 encoded PNG or JPEG image.
 */
const convertToBase64 = (text) => `data:image/png/jpeg;base64, ${text}`;
export default convertToBase64;
