import React from 'react';
import { Flag } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { getCurrentLanguage } from '../lib/i18nUtils';

function I18nSwitcher({ children }) {
  const { i18n } = useTranslation();
  const changeLanguage = (code) => i18n.changeLanguage(code);

  const isActive = (language) => getCurrentLanguage(i18n) === language;
  const buttonStyle = (language) => ({
    background: isActive(language) ? '#888' : 'inherit',
  });

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage('ja');
        }}
        style={buttonStyle('ja')}
      >
        <Flag name="jp" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage('en');
        }}
        style={buttonStyle('en')}
      >
        <Flag name="us" />
      </button>
    </>
  );
}

export default I18nSwitcher;
