"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_FILE_LARGER_3MB = exports.IS_FILE_LARGER_5MB = exports.IS_FILE_LARGER_100MB = void 0;
const file_sizes_1 = require("./file_sizes");
const IS_FILE_LARGER_100MB = (fileSize) => {
    return fileSize > file_sizes_1.FILE_SIZE_100MB;
};
exports.IS_FILE_LARGER_100MB = IS_FILE_LARGER_100MB;
const IS_FILE_LARGER_5MB = (fileSize) => {
    return fileSize > file_sizes_1.FILE_SIZE_5MB;
};
exports.IS_FILE_LARGER_5MB = IS_FILE_LARGER_5MB;
const IS_FILE_LARGER_3MB = (fileSize) => {
    return fileSize > file_sizes_1.FILE_SIZE_3MB;
};
exports.IS_FILE_LARGER_3MB = IS_FILE_LARGER_3MB;
