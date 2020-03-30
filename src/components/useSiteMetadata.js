import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useLocation } from '@reach/router';

import { removeLeadingSlash } from '../lib/locationUtils';
import { getCurrentLanguage } from '../lib/i18nUtils';

// A custom react hook that gather site meta data from our config file and translation file.
const useSiteMetadata = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // The data from translation.json
  const isHomePage = location.pathname === '/';
  const pageKey = removeLeadingSlash(location.pathname);
  const siteAuthor = t('site.author');
  const siteTitle = t(`site.title`);
  const pageTitle = isHomePage ? null : t(`pages.${pageKey}.title`);
  const pageDescription = t(`pages.${pageKey}.description`);
  const lang = getCurrentLanguage(i18n);

  // The data from gatsby-config.js
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            gmap
            facebook
            instagram
          }
        }
      }
    `
  );

  return {
    ...siteMetadata,
    pageKey,
    isHomePage,
    siteAuthor,
    siteTitle,
    pageTitle,
    pageDescription,
    lang,
  };
};

export default useSiteMetadata;
