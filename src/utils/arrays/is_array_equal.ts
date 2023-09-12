/** @format */

import { isEmpty, isEqual, xorWith } from "lodash";

/**
 * Checks if two arrays are equal by comparing their elements.
 *
 * @function
 * @param {any[]} arr1 - The first array to compare.
 * @param {any[]} arr2 - The second array to compare.
 * @returns {boolean} Returns `true` if the arrays are equal, otherwise `false`.
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [1, 2, 3];
 * const areEqual = IS_ARRAY_EQUAL(array1, array2);
 * console.log(areEqual); // true
 *
 * @note This function uses `xorWith` and `isEqual` for comparison and `isEmpty` to check the result. Ensure these utilities are imported and available in the scope.
 */
export const IS_ARRAY_EQUAL = (arr1:any[], arr2: any[]): boolean => isEmpty(xorWith(arr1, arr2, isEqual));
