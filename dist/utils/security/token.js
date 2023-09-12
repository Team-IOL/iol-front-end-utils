"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeIdToken = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const decodeIdToken = ({ IdToken, ROLE_ID }) => {
    var _a, _b, _c, _d;
    const decodedToken = (0, jwt_decode_1.default)(IdToken);
    console.log("🚀 ~ file: token.ts:16 ~ decodedToken:", decodedToken);
    // console.log("🚀 ~ file: token.ts:12 ~ decodedToken:", decodedToken);
    const isUserFreelancer = (_a = decodedToken["cognito:groups"]) === null || _a === void 0 ? void 0 : _a.includes(ROLE_ID.freelancer);
    const isUserHSAdmin = (_b = decodedToken["cognito:groups"]) === null || _b === void 0 ? void 0 : _b.includes(ROLE_ID.hs_admin);
    const isUserFacilitator = (_c = decodedToken["cognito:groups"]) === null || _c === void 0 ? void 0 : _c.includes(ROLE_ID.facilitator);
    const isUserBusiness = (_d = decodedToken["cognito:groups"]) === null || _d === void 0 ? void 0 : _d.includes(ROLE_ID.business_admin);
    return {
        name: decodedToken["name"],
        fname: decodedToken["custom:fname"],
        lname: decodedToken["custom:lname"],
        email: decodedToken.email,
        email_verified: decodedToken.email_verified,
        username: decodedToken["cognito:username"],
        roles: decodedToken["cognito:groups"],
        isUserFreelancer,
        isUserHSAdmin,
        isUserFacilitator,
        isUserBusiness
    };
};
exports.decodeIdToken = decodeIdToken;
