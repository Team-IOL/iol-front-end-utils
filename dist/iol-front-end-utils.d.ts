type ArrayOfObjects = Array<{
    id: number;
    [key: string]: any;
}>;
/**
 * Creates an index map for an array of objects based on a specified key.
 *
 * @function
 * @param {ArrayOfObjects[]} array - The array of objects to create the index map from.
 * @param {string} idKey - The key in the objects to use for indexing.
 * @returns {Record<any, any>} An index map where the keys are the values from the idKey of the objects and the values are their indices in the array.
 * @example
 * const arr = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
 * const indexMap = createIndexMap(arr, 'id');
 * console.log(indexMap); // {1: 0, 2: 1}
 */
declare function createIndexMap(array: ArrayOfObjects, idKey: string): Record<any, any>;
/**
 * Retrieves the index of an object in an array using its ID from a pre-constructed index map.
 *
 * @function
 * @param {Record<any, any>} indexMap - The index map where the keys are object IDs and the values are their indices in the original array.
 * @param {string} id - The ID of the object whose index needs to be retrieved.
 * @returns {number} The index of the object in the original array. Returns `undefined` if the ID is not found in the index map.
 * @example
 * const indexMap = {1: 0, 2: 1};
 * const index = findIndexById(indexMap, '1');
 * console.log(index); // 0
 */
declare function findIndexById(indexMap: Record<any, any>, id: string): number;

/** @format */
/**
 * Checks if two arrays are equal by comparing their elements.
 *
 * @function
 * @param {any[]} arr1 - The first array to compare.
 * @param {any[]} arr2 - The second array to compare.
 * @returns {boolean} Returns `true` if the arrays are equal, otherwise `false`.
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [1, 2, 3];
 * const areEqual = IS_ARRAY_EQUAL(array1, array2);
 * console.log(areEqual); // true
 *
 * @note This function uses `xorWith` and `isEqual` for comparison and `isEmpty` to check the result. Ensure these utilities are imported and available in the scope.
 */
declare const IS_ARRAY_EQUAL: (arr1: any[], arr2: any[]) => boolean;

/** @format */
/**
 * Checks if a value is an array or not.
 *
 * @function
 * @param {any[]} array - value to check if array or not.
 * @returns {boolean} Returns `true` if the value provided is an array
 */
declare const IS_VALUE_ARRAY: (array: any) => boolean;

declare const FILE_SIZE_100MB: number;
declare const FILE_SIZE_5MB: number;
declare const FILE_SIZE_3MB: number;

/** @format */
/**
 * Checks if file size is greater than 100MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 100MB.
 */
declare const IS_FILE_LARGER_100MB: (fileSize: number) => boolean;
/**
 * Checks if file size is greater than 5MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 5MB.
 */
declare const IS_FILE_LARGER_5MB: (fileSize: number) => boolean;
/**
 * Checks if file size is greater than 3MB
 *
 * @function
 * @param {any[]} fileSize - file size of the file for checking
 * @returns {boolean} Returns `true` if the value is greater than 3MB.
 */
declare const IS_FILE_LARGER_3MB: (fileSize: number) => boolean;

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
declare const formatCurrencyPHP: Intl.NumberFormat;

/** @format */
/**
 * HEY SUCCESS Decodes an ID token and extracts user information and roles.
 *
 * @function
 * @param {Object} params - The parameters for decoding.
 * @param {string} params.IdToken - The ID token to decode.
 * @param {Object} params.ROLE_ID - An object containing role identifiers.
 * @returns {Object} An object containing user details and roles.
 * @property {string} name - The user's name.
 * @property {string} fname - The user's first name.
 * @property {string} lname - The user's last name.
 * @property {string} email - The user's email address.
 * @property {boolean} email_verified - Indicates whether the user's email is verified.
 * @property {string} username - The user's username.
 * @property {string[]} roles - The roles assigned to the user.
 * @property {boolean} isUserFreelancer - Indicates if the user is a freelancer.
 * @property {boolean} isUserHSAdmin - Indicates if the user is an HS admin.
 * @property {boolean} isUserFacilitator - Indicates if the user is a facilitator.
 * @property {boolean} isUserBusiness - Indicates if the user is a business admin.
 * @example
 * const tokenDetails = hs_decodeIdToken({ IdToken: 'yourTokenHere', ROLE_ID: { freelancer: 'freelancerRoleID', hs_admin: 'hsAdminRoleID', facilitator: 'facilitatorRoleID', business_admin: 'businessAdminRoleID' } });
 * console.log(tokenDetails);
 *
 * @note This function uses the `jwt-decode` library to decode the ID token.
 */
declare const hs_decodeIdToken: ({ IdToken, ROLE_ID }: {
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
/**
 * Calculates the number of words in a given text.
 *
 * @function
 * @param {string} [text=""] - The text whose word count needs to be determined. Defaults to an empty string.
 * @returns {number} The number of words in the text.
 * @example
 * const wordCount = getWordLength("Hello, how are you?");
 * console.log(wordCount); // 4
 *
 * @note This function splits the text based on whitespace to determine word count.
 */
declare function getWordLength(text?: string): number;

/** @format */
/**
 * Removes all spaces from a string and converts it to lowercase.
 *
 * @function
 * @param {string} string_param - The string from which spaces need to be removed and then converted to lowercase.
 * @returns {string} The modified string without spaces and in lowercase.
 * @example
 * const modifiedString = stringRemoveSpaceLowercase("Hello World");
 * console.log(modifiedString); // "helloworld"
 *
 * @note This function uses regular expressions to remove spaces from the string.
 */
declare const stringRemoveSpaceLowercase: (string_param: string) => string;

/** @format */
/**
 * Capitalizes the first letter of a string or each substring separated by a specified character.
 *
 * @function
 * @param {Object} params - The parameters for capitalization.
 * @param {string} params.string - The string to be capitalized.
 * @param {string} params.character - The character used to split the string.
 * @returns {string} The capitalized string or capitalized substrings joined by the specified character.
 * @example
 * const capitalizedString = customCapitalize({ string: 'hello-world', character: '-' });
 * console.log(capitalizedString); // "Hello-World"
 *
 * @note This function assumes the `capitalize` function is available in the scope to capitalize individual strings.
 */
declare const customCapitalize: ({ string, character }: {
    string: string;
    character: string;
}) => string;

/** @format */
/**
 * Converts a given text to a Base64 data URI for PNG/JPEG images.
 *
 * @function
 * @param {string} text - The text to be converted to a Base64 data URI.
 * @returns {string} A Base64 data URI formatted for PNG/JPEG images.
 * @example
 * const base64Data = convertToBase64('yourBase64EncodedImageHere');
 * console.log(base64Data); // "data:image/png/jpeg;base64, yourBase64EncodedImageHere"
 *
 * @note This function assumes the provided text is a valid Base64 encoded PNG or JPEG image.
 */
declare const convertToBase64: (text: string) => string;

export { FILE_SIZE_100MB, FILE_SIZE_3MB, FILE_SIZE_5MB, IS_ARRAY_EQUAL, IS_FILE_LARGER_100MB, IS_FILE_LARGER_3MB, IS_FILE_LARGER_5MB, IS_VALUE_ARRAY, PASSWORD_HAS_MIXED_LETTERS, PASSWORD_HAS_NUMBER, PASSWORD_HAS_SPECIAL_CHARACTERS, convertToBase64, createIndexMap, customCapitalize, findIndexById, formatCurrencyPHP, getWordLength, hs_decodeIdToken, limitWords, stringRemoveSpaceLowercase };
