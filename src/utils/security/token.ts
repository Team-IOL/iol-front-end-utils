/** @format */

import jwtDecode from "jwt-decode";


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
export const hs_decodeIdToken: ({ IdToken, ROLE_ID }: { IdToken: string, ROLE_ID: any }) => {
  name: string;
  fname: string;
  lname: string;
  email: string;
  email_verified: boolean;
  username: string;
  roles: string[];
} = ({ IdToken, ROLE_ID }) => {
  const decodedToken: any = jwtDecode(IdToken);
  console.log("🚀 ~ file: token.ts:16 ~ decodedToken:", decodedToken);
  // console.log("🚀 ~ file: token.ts:12 ~ decodedToken:", decodedToken);
  const isUserFreelancer = decodedToken["cognito:groups"]?.includes(ROLE_ID.freelancer);
  const isUserHSAdmin = decodedToken["cognito:groups"]?.includes(ROLE_ID.hs_admin);
  const isUserFacilitator = decodedToken["cognito:groups"]?.includes(ROLE_ID.facilitator);
  const isUserBusiness = decodedToken["cognito:groups"]?.includes(ROLE_ID.business_admin);

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
