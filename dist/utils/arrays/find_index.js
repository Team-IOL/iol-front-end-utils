"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndexById = exports.createIndexMap = void 0;
function createIndexMap(array, idKey) {
    const indexMap = {};
    for (let i = 0; i < array.length; i++) {
        indexMap[array[i][idKey]] = i;
    }
    return indexMap;
}
exports.createIndexMap = createIndexMap;
function findIndexById(indexMap, id) {
    return indexMap[id];
}
exports.findIndexById = findIndexById;
