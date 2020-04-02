import React from 'react';
import { Menu } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

// Initialize i18next
// https://www.i18next.com/overview/api#init
import '../i18n';

import AppHelmet from './AppHelmet';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import NavMenuItems from './NavMenuItems';
import NavLink from './NavLink';
import SocialButtons from './SocialButtons';
import I18nSwitcher from './I18nSwitcher';

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
          <Menu secondary vertical size="large" fluid>
            <Menu.Item
              as={NavLink}
              to={'/'}
              content={t(`pages.home.link-label`)}
            />

            <NavMenuItems />

            <Menu.Item>
              <I18nSwitcher />
            </Menu.Item>

            <Menu.Item>
              <SocialButtons />
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
