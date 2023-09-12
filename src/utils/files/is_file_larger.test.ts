import { FILE_SIZE_3MB, FILE_SIZE_5MB, FILE_SIZE_100MB } from "./file_sizes";
import { IS_FILE_LARGER_3MB, IS_FILE_LARGER_5MB, IS_FILE_LARGER_100MB } from "./is_file_larger";


describe("IS_FILE_LARGER_3MB", () => {
    test("false value less then 3MB", () => {
        const result = IS_FILE_LARGER_3MB(FILE_SIZE_3MB - 1);
        expect(result).toBe(false)
    })
    test("false value equal to 3MB", () => {
        const result = IS_FILE_LARGER_3MB(FILE_SIZE_3MB);
        expect(result).toBe(false)
    })
    test("true value more then 3MB", () => {
        const result = IS_FILE_LARGER_3MB(FILE_SIZE_3MB + 1);
        expect(result).toBe(true)
    })

});

describe("IS_FILE_LARGER_5MB", () => {
    test("false value less then 5MB", () => {
        const result = IS_FILE_LARGER_5MB(FILE_SIZE_5MB - 1);
        expect(result).toBe(false)
    })
    test("false value equal to 5MB", () => {
        const result = IS_FILE_LARGER_5MB(FILE_SIZE_5MB);
        expect(result).toBe(false)
    })
    test("true value more then 5MB", () => {
        const result = IS_FILE_LARGER_5MB(FILE_SIZE_5MB + 1);
        expect(result).toBe(true)
    })
});

describe("IS_FILE_LARGER_100MB", () => {
    test("false value less then 100MB", () => {
        const result = IS_FILE_LARGER_100MB(FILE_SIZE_100MB - 1);
        expect(result).toBe(false)
    })
    test("false value equal to 100MB", () => {
        const result = IS_FILE_LARGER_100MB(FILE_SIZE_100MB);
        expect(result).toBe(false)
    })
    test("true value more then 100MB", () => {
        const result = IS_FILE_LARGER_100MB(FILE_SIZE_100MB + 1);
        expect(result).toBe(true)
    })
});
