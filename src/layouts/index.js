import React from 'react';
import { Button, Menu, Header } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

// Initialize i18next
// https://www.i18next.com/overview/api#init
import '../i18n';

import AppHelmet from '../components/AppHelmet';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import NavMenuItems from '../components/NavMenuItems';
import NavLink from '../components/NavLink';
import SocialButtons from '../components/SocialButtons';
import I18nSwitcher from '../components/I18nSwitcher';

function MobileTemplate({ children }) {
  const { t } = useTranslation();

  return (
    <>
      <label className="FullscreenMenu">
        <input type="checkbox" />

        <span className="hamburgerButton">
          <span className="hamburgerIcon"></span>
        </span>

        <nav className="menuItems">
          <Menu secondary vertical>
            <Menu.Item
              as={NavLink}
              to={'/'}
              content={t(`pages.home.link-label`)}
            />

            <NavMenuItems />

            <I18nSwitcher />

            <Menu.Item>
              <SocialButtons />
            </Menu.Item>

            <Menu.Item>
              <Header as="h4">{t('labels.contact-us')}</Header>
              <Button
                as="a"
                href={`tel:${t('site.phone')}`}
                icon="phone"
                circular
                size="large"
                color="green"
                basic
              />
            </Menu.Item>
          </Menu>
        </nav>
      </label>

      {children}
    </>
  );
}

function DesktopTemplate({ children }) {
  return (
    <div style={{ minHeight: '80vh' }}>
      <AppHeader />

      <div className="spacer" style={{ height: '50px' }}></div>

      {children}
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <AppHelmet />

      <Media query={{ maxWidth: 991 }}>
        {(matches) =>
          matches ? (
            <MobileTemplate>{children}</MobileTemplate>
          ) : (
            <DesktopTemplate>{children}</DesktopTemplate>
          )
        }
      </Media>

      <AppFooter />
    </>
  );
}

export default Layout;
