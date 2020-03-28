import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import NavMenuItems from './NavMenuItems';
import SocialButtons from './SocialButtons';
import I18nSwitcher from './I18nSwitcher';

function AppHeader({ children }) {
  const { t } = useTranslation();

  return (
    <Segment
      vertical
      style={{
        position: 'fixed',
        zIndex: 999,
        width: '100%',
        padding: 0,
        background: 'rgba(255,255,255,.8)',
      }}
    >
      <Container>
        <Menu secondary>
          <Menu.Item as={Link} to={'/'} content={t('nav-menu-items.home')} />
          <NavMenuItems />

          <Menu.Menu position="right">
            <Menu.Item>
              <I18nSwitcher />
            </Menu.Item>
            <Menu.Item>
              <SocialButtons />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
}

export default AppHeader;
