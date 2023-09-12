/** @format */

import { capitalize } from "lodash";

const customCapitalize = ({ string, character }: {string: string; character: string}) => {
  if (string.includes(character)) return string.split(character).map(capitalize).join(character);
  return capitalize(string);
};

export default customCapitalize;
