/** @format */

import { FILE_SIZE_100MB, FILE_SIZE_3MB, FILE_SIZE_5MB } from "./file_sizes";

export const IS_FILE_LARGER_100MB = (fileSize: number) => {
  return fileSize > FILE_SIZE_100MB;
};

export const IS_FILE_LARGER_5MB = (fileSize: number) => {
  return fileSize > FILE_SIZE_5MB;
};

export const IS_FILE_LARGER_3MB = (fileSize: number) => {
  return fileSize > FILE_SIZE_3MB;
};