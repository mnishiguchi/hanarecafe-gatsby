// https://github.com/i18next/i18next/issues/489
export const getCurrentLanguage = (i18n) =>
  i18n.language || window.localStorage.i18nextLng || '';
