import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={Link} to={'/yomeiri'} content={`狐の嫁入り`} />
      <Menu.Item as={Link} to={'/tenjinzo'} content={`大天神像`} />
      <Menu.Item as={Link} to={'/saireiichi'} content={`祭礼市`} />
    </>
  );
}

export default NavMenuItems;
