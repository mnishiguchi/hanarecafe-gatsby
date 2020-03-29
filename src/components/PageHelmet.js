/**
 * PageHelmet component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from '@reach/router';

import { getCurrentLanguage } from '../lib/i18nUtils';
import { removeLeadingSlash } from '../lib/locationUtils';

function PageHelmet({ meta = [] }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isHomePage = location.pathname === '/';
  const pageKey = removeLeadingSlash(location.pathname);
  const siteAuthor = t('site.author');
  const siteTitle = t(`site.title`);
  const pageTitle = isHomePage ? null : t(`pages.${pageKey}.title`);
  const pageDescription = t(`pages.${pageKey}.description`);

  return (
    <Helmet
      htmlAttributes={{
        lang: getCurrentLanguage(i18n),
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      defaultTitle={siteTitle}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
      ].concat(meta)}
    />
  );
}

export default PageHelmet;
