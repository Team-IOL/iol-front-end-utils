/**
 * Calculates the height of a 16:10 rectangle from the width.

 * @param width The width of the rectangle.
 * @returns The height of the rectangle.
 */
export const calcHeight1610 = (width: number) => (width * 10) / 16;