import formatCurrencyPHP from "./format_currency";

describe("formatCurrencyPHP", () => {
  test("correctly format numbers to Philippine Peso format.", () => {
    const number = 1234.56;
    const formatted = formatCurrencyPHP.format(number);
    expect(formatted).toBe("1,234.56")
  })

  test("should handle numbers without decimal places.", () => {
    const number = 1234;
    const formatted = formatCurrencyPHP.format(number);
    expect(formatted).toBe("1,234.00")
  })

  it("should handle valid number strings", () => {
    const numberString = "1234.56";
    const formatted = formatCurrencyPHP.format(Number(numberString));
    expect(formatted).toBe("1,234.56");
  });

  it("return NaN for invalid string", () => {
    const invalidNumberString = "abc";
    expect(formatCurrencyPHP.format(Number(invalidNumberString))).toBe("NaN");
  });
});
