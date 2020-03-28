import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'gatsby';

import NavMenuItems from './NavMenuItems';
import SocialButtons from './SocialButtons';

function AppHeader({ children }) {
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
          <Menu.Item as={Link} to={'/'} content="ホーム" />
          <NavMenuItems />

          <Menu.Menu position="right">
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
