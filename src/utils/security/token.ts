/** @format */

import jwtDecode from "jwt-decode";

export const decodeIdToken: ({ IdToken, ROLE_ID }: { IdToken: string, ROLE_ID: any }) => {
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
