/** @format */
import { IS_ARRAY_EQUAL } from "./is_array_equal";


describe("IS_ARRAY_EQUAL", () => {
    it("true if array of strings is equal", () => {
        const array1 = ["1", "2", "3"];
        const array2 = ["1", "2", "3"];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(true)
    })
    it("true if array of numbers is equal", () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(true)
    })
    it("true if array of objects is equal", () => {
        const array1 = [{}, { name: "Agot", age: 35 }];
        const array2 = [{}, { name: "Agot", age: 35 }];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(true)
    })

    it("return true if array of strings, objects, numbers, arrays, boolean is equal", () => {
        const array1 = [["1", 2], { name: "Agot", age: 35 }, "1", 2, false];
        const array2 = [["1", 2], { name: "Agot", age: 35 }, "1", 2, false];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(true)
    })

    it("false if array of strings is not equal", () => {
        const array1 = ["1", "2", "3"];
        const array2 = ["3", "3", "3"];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(false)
    })

    it("false if array of numbers is not equal", () => {
        const array1 = [1, 2, 3];
        const array2 = [2, 4, 6];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(false)
    })

    it("true if array of objects is NOT equal", () => {
        const array1 = [{}, { name: "Agot", age: 35 }];
        const array2 = [{}, { name: "Aggt", age: 35 }];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(false)
    })

    it("return true if array of strings, objects, numbers, arrays, boolean is equal", () => {
        const array1 = [["1", 3], { name: "Agot", age: 35 }, "1", 2, false];
        const array2 = [["2", 2], { name: "Agot", age: 36 }, "1", 2, true];
        const result = IS_ARRAY_EQUAL(array1, array2);

        expect(result).toBe(false)
    })
})