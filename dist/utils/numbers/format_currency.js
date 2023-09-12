"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const formatCurrencyPHP = new Intl.NumberFormat("fil-PH", {
    style: "decimal",
    currency: "PHP",
    minimumFractionDigits: 2
});
exports.default = formatCurrencyPHP;
