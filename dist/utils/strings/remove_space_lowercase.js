"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const stringRemoveSpaceLowercase = (string_param) => { var _a; return (_a = string_param === null || string_param === void 0 ? void 0 : string_param.replace(/\s+/g, "")) === null || _a === void 0 ? void 0 : _a.toLowerCase(); };
exports.default = stringRemoveSpaceLowercase;
