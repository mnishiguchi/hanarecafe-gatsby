import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'semantic-ui-react';

function I18nSwitcher({ children }) {
  const { i18n } = useTranslation();
  const handleChange = (event) => i18n.changeLanguage(event.target.value);

  /* eslint-disable jsx-a11y/no-onchange */
  return (
    <label>
      <Icon name="language" size="big" />
      <select
        defaultValue={i18n.language}
        onChange={handleChange}
        style={{ height: `24px`, borderColor: `transparent`, outline: `none` }}
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </label>
  );
}

export default I18nSwitcher;
