import React from 'react';
import { Flag } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function I18nSwitcher({ children }) {
  const { i18n } = useTranslation();
  const changeLanguage = (code) => i18n.changeLanguage(code);

  const isActive = (language) => i18n.language === language;
  const buttonStyle = (language) => ({
    background: isActive(language) ? '#888' : 'inherit',
    padding: '2px 2px 2px 10px',
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
