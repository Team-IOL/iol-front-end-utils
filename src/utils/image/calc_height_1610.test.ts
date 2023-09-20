import { calcHeight1610 } from "./calc_height_1610";

const CALC_HEIGHT_1610_MOCK = jest.fn((width) => (width * 10) / 16);

describe("CALC HEIGHT 1610", () => {
    test("calculates the height of a 16:10 rectangle from the width", () => {
        const width1 = 160;
        const width2 = 320;
        const width3 = 640;

        expect(calcHeight1610(width1)).toBe(CALC_HEIGHT_1610_MOCK(width1));
        expect(calcHeight1610(width1)).toBe(100);
        expect(calcHeight1610(width2)).toBe(CALC_HEIGHT_1610_MOCK(width2));
        expect(calcHeight1610(width2)).toBe(200);
        expect(calcHeight1610(width3)).toBe(CALC_HEIGHT_1610_MOCK(width3));
        expect(calcHeight1610(width3)).toBe(400);
    });
});
