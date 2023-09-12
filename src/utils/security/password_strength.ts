/** @format */

// has number
export const PASSWORD_HAS_NUMBER = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
export const PASSWORD_HAS_MIXED_LETTERS = (number: string) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
export const PASSWORD_HAS_SPECIAL_CHARACTERS = (number: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const getPasswordStrengthColor = (count: number) => {
  if (count < 2) return { label: "Poor", color: "error.main" };
  if (count < 3) return { label: "Weak", color: "warning.main" };
  if (count < 4) return { label: "Normal", color: "warning.dark" };
  if (count < 5) return { label: "Good", color: "success.main" };
  if (count < 6) return { label: "Strong", color: "success.dark" };
  return { label: "Poor", color: "error.main" };
};

// password strength indicator
export const strengthIndicator = (password: string) => {
  let strengths = 0;
  if (password.length > 5) strengths += 1;
  if (password.length > 7) strengths += 1;
  if (PASSWORD_HAS_NUMBER(password)) strengths += 1;
  if (PASSWORD_HAS_SPECIAL_CHARACTERS(password)) strengths += 1;
  if (PASSWORD_HAS_MIXED_LETTERS(password)) strengths += 1;
  return strengths;
};
