import React from 'react';
import { Flag } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function I18nSwitcher({ children }) {
  const { i18n } = useTranslation();
  const changeLanguage = (code) => i18n.changeLanguage(code);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage('ja');
        }}
      >
        <Flag name="jp" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage('en');
        }}
      >
        <Flag name="us" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeLanguage('en');
        }}
      >
        <Flag name="uk" />
      </button>
    </>
  );
}

export default I18nSwitcher;
