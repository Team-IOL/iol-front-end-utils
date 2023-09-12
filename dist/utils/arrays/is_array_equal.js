"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_ARRAY_EQUAL = void 0;
const lodash_1 = require("lodash");
/**
 * compares 2 arrays, mreturns true or false
 * @param {*} arr1 - First array for comparison
 * @param {*} arr2 - Second array for comparison
 * @returns
 */
const IS_ARRAY_EQUAL = (arr1, arr2) => (0, lodash_1.isEmpty)((0, lodash_1.xorWith)(arr1, arr2, lodash_1.isEqual));
exports.IS_ARRAY_EQUAL = IS_ARRAY_EQUAL;
