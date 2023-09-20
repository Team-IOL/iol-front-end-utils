/** @format */

//arrays
import { createIndexMap, findIndexById } from "./arrays/find_index";
import { IS_ARRAY_EQUAL } from "./arrays/is_array_equal";
import { IS_VALUE_ARRAY } from "./arrays/is_value_array";
import { IS_VALID_ARRAY } from "./arrays/is_valid_array";

//files
import { FILE_SIZE_100MB, FILE_SIZE_3MB, FILE_SIZE_5MB } from "./files/file_sizes";
import { IS_FILE_LARGER_100MB, IS_FILE_LARGER_3MB, IS_FILE_LARGER_5MB } from "./files/is_file_larger";

//image
import { calcHeight1610 } from "./image/calc_height_1610";

//numbers
import formatCurrencyPHP from "./numbers/format_currency";

//security
import { hs_decodeIdToken } from "./security/token";
import { PASSWORD_HAS_NUMBER, PASSWORD_HAS_MIXED_LETTERS, PASSWORD_HAS_SPECIAL_CHARACTERS, getPasswordStrengthColor, strengthIndicator } from "./security/password_strength";

//strings
import { limitWords, getWordLength } from "./strings/limit_words";
import stringRemoveSpaceLowercase from "./strings/remove_space_lowercase";
import customCapitalize from "./strings/custom_capitalize";
import convertToBase64 from "./strings/convert_to_base64";

export {
  //arrays
  createIndexMap,
  findIndexById,
  IS_ARRAY_EQUAL,
  IS_VALID_ARRAY,
  IS_VALUE_ARRAY,


  //files
  FILE_SIZE_100MB,
  FILE_SIZE_5MB,
  FILE_SIZE_3MB,
  IS_FILE_LARGER_100MB,
  IS_FILE_LARGER_3MB,
  IS_FILE_LARGER_5MB,

  //image
  calcHeight1610,

  //numbers
  formatCurrencyPHP,

  //security
  hs_decodeIdToken,
  PASSWORD_HAS_NUMBER,
  PASSWORD_HAS_MIXED_LETTERS,
  PASSWORD_HAS_SPECIAL_CHARACTERS,

  limitWords,
  getWordLength,
  stringRemoveSpaceLowercase,
  customCapitalize,
  convertToBase64
};
