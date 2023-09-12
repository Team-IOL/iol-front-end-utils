type ArrayOfObjects = Array<{ id: number; [key: string]: any }>;

export function createIndexMap(array: ArrayOfObjects, idKey: string) {
  const indexMap: Record<any, any> = {};
  for (let i = 0; i < array.length; i++) {
    indexMap[array[i][idKey]] = i;
  }
  return indexMap;
}

export function findIndexById(indexMap: Record<any, any>, id: string) {
  return indexMap[id];
}
