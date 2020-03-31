export const removeLeadingSlash = (string) => string.replace(/^\/+/g, '');
export const removeExtensionCode = (string) => string.split('.')[0];

export const pathToPageKey = (string) =>
  removeLeadingSlash(removeExtensionCode(string));
