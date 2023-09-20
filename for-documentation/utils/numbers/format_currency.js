/** @format */
/**
 * A utility for formatting numbers as currency in Philippine Peso (PHP) using the Filipino locale.
 *
 * @constant
 * @type {Intl.NumberFormat}
 * @example
 * const amount = 1234.56;
 * console.log(formatCurrencyPHP.format(amount)); // "1,234.56"
 *
 * @note This utility uses the "fil-PH" locale and is set to display numbers in decimal style with a minimum of 2 fraction digits.
 */
const formatCurrencyPHP = new Intl.NumberFormat("fil-PH", {
    style: "decimal",
    currency: "PHP",
    minimumFractionDigits: 2
});
export default formatCurrencyPHP;
