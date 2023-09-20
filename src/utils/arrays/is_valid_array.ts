/** @format */

import { IS_VALUE_ARRAY } from "./is_value_array";

/**
 * Checks if a value is a an array and if it contains an element.
 *
 * @function
 * @param {any[]} array - value to check if array or not.
 * @returns {boolean} Returns `true` if the value provided is an array and if it contains an element
 */
export const IS_VALID_ARRAY = (array: any): boolean => IS_VALUE_ARRAY(array) && array?.length > 0;
