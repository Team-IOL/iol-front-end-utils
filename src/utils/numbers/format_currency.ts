/** @format */

const formatCurrencyPHP = new Intl.NumberFormat("fil-PH", {
  style: "decimal",
  currency: "PHP",
  minimumFractionDigits: 2
});

export default formatCurrencyPHP;
