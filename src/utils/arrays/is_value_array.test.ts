import { IS_VALUE_ARRAY } from "./is_value_array";


describe("IS_VALUE_ARRAY", () => {
    test("false if value is string", () => {
        const result = IS_VALUE_ARRAY("i am string")
        expect(result).toBe(false)
    })
    test("false if value is number", () => {
        const result = IS_VALUE_ARRAY(35)
        expect(result).toBe(false)
    })
    test("false if value is boolean", () => {
        const result = IS_VALUE_ARRAY(false)
        expect(result).toBe(false)
    })
    test("false if value is object", () => {
        const result = IS_VALUE_ARRAY({ array: ["2", 3] })
        expect(result).toBe(false)
    })
    test("true if value is array", () => {
        const result = IS_VALUE_ARRAY(["i", "am", "array"])
        expect(result).toBe(true)
    })
})