/** @format */

import { createIndexMap, findIndexById } from "./find_index";

describe("createIndexMap", () => {
  it("", () => {
    const indexMap = {
      1: 0,
      2: 1,
      3: 2
    };

    const id = '2';
    const result = findIndexById(indexMap, id);
    expect(result).toBe(1);
  });
})

describe("findIndexById", () => {
  it("should return the index of the object with the given id", () => {
    const indexMap = {
      1: 0,
      2: 1,
      3: 2
    }

    const id = "2";
    const result = findIndexById(indexMap, id);
    expect(result).toBe(1);
  })


  it("should return undefined if the id is not in the indexMap", () => {
    const indexMap = {
      1: 0,
      2: 1,
      3: 2
    }
    const id = "5";
    const result = findIndexById(indexMap, id);
    expect(result).toBeUndefined();
  })
});

