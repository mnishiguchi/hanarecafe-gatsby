const removeLeadingAndTrailingSlashes = (string) => string.replace(/^\/+/g, '');
const removeExtensionCode = (string) => string.split('.')[0];

export const pathToPageKey = (string) =>
  removeLeadingAndTrailingSlashes(removeExtensionCode(string));
