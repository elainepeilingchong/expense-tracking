
export const REQUIRED_MESSAGE = 'THIS FIELD IS REQUIRED';
export const required = val => (val ? undefined : REQUIRED_MESSAGE);

export const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]{1,64}@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'INVALID EMAIL ADDRESS'
    : undefined;

export const numericAppendCustomError = (errorMessage, append) => value =>
  value && !/^(0|[1-9][0-9]*)$/i.test(value.replace(append, ''))
    ? errorMessage !== value
      ? errorMessage
      : 'INVALID - MUST BE NUMERIC'
    : undefined;

export const numeric = value =>
  value && !/^(0|[1-9][0-9]*)$/i.test(value)
    ? 'INVALID - MUST BE NUMERIC'
    : undefined;

export const nameSurname = value =>
  value && !/^[A-Za-z0-9]+\s[A-Za-z0-9']+/i.test(value)
    ? "DON'T FORGET YOUR LAST NAME"
    : undefined;

export const password = value =>
  value && value.trim().length >= 6
    ? undefined
    : 'PASSWORD MUST BE AT LEAST 6 CHARACTERS';

export const matchingPasswords = (value, allValues) =>
  value && allValues.password && value.trim() === allValues.password.trim()
    ? undefined
    : 'PASSWORDS MUST MATCH';

export const verificationCode = value =>
  value && value.trim().length === 6 ? undefined : 'INVALID VERIFICATION CODE';

export const minMaxValue = (fieldName, minValue, maxValue, append) => value =>
  value &&
  value.replace(append, '') >= minValue &&
  value.replace(append, '') <= maxValue
    ? undefined
    : `${fieldName.toUpperCase()} MUST BE BETWEEN ${minValue} AND ${maxValue} KG`;

export const mustBeTrue = val =>
  val ? undefined : 'Must accept privacy policy.';

export const notOnlyWhitespace = val =>
  val && val.replace(/\s/g, '').length
    ? undefined
    : 'FIELD CANNOT BE WHITESPACE';

export const emailsAllValid = emails => {
  if (emails && emails.length) {
    const invalidEmails = [];

    emails.forEach(email => {
      if (emailFormat(email) !== undefined) {
        invalidEmails.push(email);
      }
    });

    if (invalidEmails.length) {
      // Returning the invalid emails as the error
      return invalidEmails;
    }
  }

  return undefined;
};

export const notEmptyArray = array => {
  if (!array || !array.length) {
    return 'THIS FIELD CANNOT BE EMPTY';
  }

  return undefined;
};
