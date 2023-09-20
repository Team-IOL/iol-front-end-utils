import { IS_VALID_ARRAY } from "./is_valid_array";

describe("IS_VALID_ARRAY", () => {
    test("false if value is string", () => {
        const result = IS_VALID_ARRAY("i am string")
        expect(result).toBe(false)
    })
    test("false if value is number", () => {
        const result = IS_VALID_ARRAY(35)
        expect(result).toBe(false)
    })
    test("false if value is boolean", () => {
        const result = IS_VALID_ARRAY(false)
        expect(result).toBe(false)
    })
    test("false if value is object", () => {
        const result = IS_VALID_ARRAY({ array: ["2", 3] })
        expect(result).toBe(false)
    })
    test("true if value is array with at least 1 element", () => {
        const result = IS_VALID_ARRAY([42])
        expect(result).toBe(true)
    })
    test("false if value is array with no element", () => {
        const result = IS_VALID_ARRAY([])
        expect(result).toBe(false)
    })
})