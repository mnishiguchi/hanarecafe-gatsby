import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useLocation } from '@reach/router';

import { pathToPageKey } from '../lib/locationUtils';
import { getCurrentLanguage } from '../lib/i18nUtils';

// A custom react hook that gather site meta data from our config file and translation file.
const useSiteMetadata = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isHomePage = location.pathname === '/';
  const pageKey = pathToPageKey(location.pathname);

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
    // The data from gatsby-config.js
    ...siteMetadata,

    // The data from translation.json
    siteAuthor: t('site.author'),
    siteTitle: t(`site.title`),
    siteDescription: t(`site.description`),
    pageTitle: isHomePage ? null : t(`pages.${pageKey}.title`),
    pageDescription: isHomePage ? null : t(`pages.${pageKey}.description`),
    lang: getCurrentLanguage(i18n),
  };
};

export default useSiteMetadata;
