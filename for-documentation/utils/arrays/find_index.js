/**
 * Creates an index map for an array of objects based on a specified key.
 *
 * @function
 * @param {ArrayOfObjects[]} array - The array of objects to create the index map from.
 * @param {string} idKey - The key in the objects to use for indexing.
 * @returns {Record<any, any>} An index map where the keys are the values from the idKey of the objects and the values are their indices in the array.
 * @example
 * const arr = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
 * const indexMap = createIndexMap(arr, 'id');
 * console.log(indexMap); // {1: 0, 2: 1}
 */
export function createIndexMap(array, idKey) {
    const indexMap = {};
    for (let i = 0; i < array.length; i++) {
        indexMap[array[i][idKey]] = i;
    }
    return indexMap;
}
/**
 * Retrieves the index of an object in an array using its ID from a pre-constructed index map.
 *
 * @function
 * @param {Record<any, any>} indexMap - The index map where the keys are object IDs and the values are their indices in the original array.
 * @param {string} id - The ID of the object whose index needs to be retrieved.
 * @returns {number} The index of the object in the original array. Returns `undefined` if the ID is not found in the index map.
 * @example
 * const indexMap = {1: 0, 2: 1};
 * const index = findIndexById(indexMap, '1');
 * console.log(index); // 0
 */
export function findIndexById(indexMap, id) {
    return indexMap[id];
}
