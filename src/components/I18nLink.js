import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';

// A wrapper around Gatsby’s Link component that handles i18n routes.
function I18nLink({ langKey, to, ...rest }) {
  const { i18n } = useTranslation();
  const defaultLanguage = i18n.options.lang;
  const nextLangKey = langKey || i18n.language;
  const nextPath =
    !nextLangKey || nextLangKey === defaultLanguage
      ? to
      : `/${nextLangKey}${to}`;

  if (process.env.NODE_ENV !== 'production')
    console.log('I18nLink', {
      to,
      nextLangKey,
      nextPath,
    });

  return <Link to={nextPath} {...rest} />;
}

export default I18nLink;
