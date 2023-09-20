/** @format */
import { FILE_SIZE_100MB, FILE_SIZE_3MB, FILE_SIZE_5MB } from "./file_sizes";
/**
 * Checks if file size is greater than 100MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 100MB.
 */
export const IS_FILE_LARGER_100MB = (fileSize) => {
    return fileSize > FILE_SIZE_100MB;
};
/**
 * Checks if file size is greater than 5MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 5MB.
 */
export const IS_FILE_LARGER_5MB = (fileSize) => {
    return fileSize > FILE_SIZE_5MB;
};
/**
 * Checks if file size is greater than 3MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 3MB.
 */
export const IS_FILE_LARGER_3MB = (fileSize) => {
    return fileSize > FILE_SIZE_3MB;
};
