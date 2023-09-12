/** @format */

import { isEmpty, isEqual, xorWith } from "lodash";

/**
 * compares 2 arrays, mreturns true or false
 * @param {*} arr1 - First array for comparison
 * @param {*} arr2 - Second array for comparison
 * @returns
 */
export const IS_ARRAY_EQUAL = (arr1:any[], arr2: any[]) => isEmpty(xorWith(arr1, arr2, isEqual));
