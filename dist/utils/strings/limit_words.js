"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordLength = exports.limitWords = void 0;
// stringUtils.ts
/**
 * Limits the given text to a specified number of words.
 * @param text The original text.
 * @param wordLimit The maximum number of words.
 * @returns The limited text.
 */
function limitWords(text, wordLimit) {
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
}
exports.limitWords = limitWords;
function getWordLength(text = "") {
    const words = text.split(/\s+/);
    return words.length;
}
exports.getWordLength = getWordLength;
