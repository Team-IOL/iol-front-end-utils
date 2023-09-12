type ArrayOfObjects = Array<{
    id: number;
    [key: string]: any;
}>;
declare function createIndexMap(array: ArrayOfObjects, idKey: string): Record<any, any>;
declare function findIndexById(indexMap: Record<any, any>, id: string): any;

/** @format */
/**
 * compares 2 arrays, mreturns true or false
 * @param {*} arr1 - First array for comparison
 * @param {*} arr2 - Second array for comparison
 * @returns
 */
declare const IS_ARRAY_EQUAL: (arr1: any[], arr2: any[]) => boolean;

/** @format */
declare const IS_VALUE_ARRAY: (array: any) => boolean;

declare const FILE_SIZE_100MB: number;
declare const FILE_SIZE_5MB: number;
declare const FILE_SIZE_3MB: number;

/** @format */
declare const IS_FILE_LARGER_100MB: (fileSize: number) => boolean;
declare const IS_FILE_LARGER_5MB: (fileSize: number) => boolean;
declare const IS_FILE_LARGER_3MB: (fileSize: number) => boolean;

/** @format */
declare const formatCurrencyPHP: Intl.NumberFormat;

/** @format */
declare const decodeIdToken: ({ IdToken, ROLE_ID }: {
    IdToken: string;
    ROLE_ID: any;
}) => {
    name: string;
    fname: string;
    lname: string;
    email: string;
    email_verified: boolean;
    username: string;
    roles: string[];
};

/** @format */
declare const PASSWORD_HAS_NUMBER: (number: string) => boolean;
declare const PASSWORD_HAS_MIXED_LETTERS: (number: string) => boolean;
declare const PASSWORD_HAS_SPECIAL_CHARACTERS: (number: string) => boolean;

/** @format */
/**
 * Limits the given text to a specified number of words.
 * @param text The original text.
 * @param wordLimit The maximum number of words.
 * @returns The limited text.
 */
declare function limitWords(text: string, wordLimit: number): string;
declare function getWordLength(text?: string): number;

/** @format */
declare const stringRemoveSpaceLowercase: (string_param: string) => string;

/** @format */
declare const customCapitalize: ({ string, character }: {
    string: string;
    character: string;
}) => string;

/** @format */
declare const convertToBase64: (text: string) => string;

export { FILE_SIZE_100MB, FILE_SIZE_3MB, FILE_SIZE_5MB, IS_ARRAY_EQUAL, IS_FILE_LARGER_100MB, IS_FILE_LARGER_3MB, IS_FILE_LARGER_5MB, IS_VALUE_ARRAY, PASSWORD_HAS_MIXED_LETTERS, PASSWORD_HAS_NUMBER, PASSWORD_HAS_SPECIAL_CHARACTERS, convertToBase64, createIndexMap, customCapitalize, decodeIdToken, findIndexById, formatCurrencyPHP, getWordLength, limitWords, stringRemoveSpaceLowercase };
