"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const customCapitalize = ({ string, character }) => {
    if (string.includes(character))
        return string.split(character).map(lodash_1.capitalize).join(character);
    return (0, lodash_1.capitalize)(string);
};
exports.default = customCapitalize;
