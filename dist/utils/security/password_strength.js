"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.strengthIndicator = exports.getPasswordStrengthColor = exports.PASSWORD_HAS_SPECIAL_CHARACTERS = exports.PASSWORD_HAS_MIXED_LETTERS = exports.PASSWORD_HAS_NUMBER = void 0;
// has number
const PASSWORD_HAS_NUMBER = (number) => new RegExp(/[0-9]/).test(number);
exports.PASSWORD_HAS_NUMBER = PASSWORD_HAS_NUMBER;
// has mix of small and capitals
const PASSWORD_HAS_MIXED_LETTERS = (number) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);
exports.PASSWORD_HAS_MIXED_LETTERS = PASSWORD_HAS_MIXED_LETTERS;
// has special chars
const PASSWORD_HAS_SPECIAL_CHARACTERS = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);
exports.PASSWORD_HAS_SPECIAL_CHARACTERS = PASSWORD_HAS_SPECIAL_CHARACTERS;
// set color based on password strength
const getPasswordStrengthColor = (count) => {
    if (count < 2)
        return { label: "Poor", color: "error.main" };
    if (count < 3)
        return { label: "Weak", color: "warning.main" };
    if (count < 4)
        return { label: "Normal", color: "warning.dark" };
    if (count < 5)
        return { label: "Good", color: "success.main" };
    if (count < 6)
        return { label: "Strong", color: "success.dark" };
    return { label: "Poor", color: "error.main" };
};
exports.getPasswordStrengthColor = getPasswordStrengthColor;
// password strength indicator
const strengthIndicator = (password) => {
    let strengths = 0;
    if (password.length > 5)
        strengths += 1;
    if (password.length > 7)
        strengths += 1;
    if ((0, exports.PASSWORD_HAS_NUMBER)(password))
        strengths += 1;
    if ((0, exports.PASSWORD_HAS_SPECIAL_CHARACTERS)(password))
        strengths += 1;
    if ((0, exports.PASSWORD_HAS_MIXED_LETTERS)(password))
        strengths += 1;
    return strengths;
};
exports.strengthIndicator = strengthIndicator;
