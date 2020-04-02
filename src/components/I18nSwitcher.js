import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'semantic-ui-react';
import { navigate } from 'gatsby';

import * as utils from '../lib/utils';

function I18nSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = React.useCallback(
    (event) => {
      const supportedLanguages = i18n.options.whitelist;
      const defaultLanguage = i18n.options.lang;
      const currentPath = utils.getCurrentPath();
      const pageSegment = utils.pathToDefaultForm(
        currentPath,
        supportedLanguages
      );
      const langKey = event.target.value;
      const nextPath =
        !langKey || langKey === defaultLanguage
          ? pageSegment
          : `/${langKey}${pageSegment}`;

      i18n.changeLanguage(langKey).then(() => navigate(nextPath));
    },
    [i18n]
  );

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
