import React from 'react';
import { Menu } from 'semantic-ui-react';

import NavLink from './NavLink';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={NavLink} to={'/pastries'} content={`Pastries`} />
      <Menu.Item as={NavLink} to={'/cakes'} content={`Cakes`} />
      <Menu.Item as={NavLink} to={'/amenities'} content={`Amenities`} />
      <Menu.Item as={NavLink} to={'/food-truck'} content={`Food Truck`} />
      <Menu.Item
        as={NavLink}
        to={'/special-orders'}
        content={`Special Orders`}
      />
      <Menu.Item as={NavLink} to={'/owner'} content={`Meet the owner`} />
    </>
  );
}

export default NavMenuItems;
