import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={Link} to={'/bread'} content={`Bread`} />
      <Menu.Item as={Link} to={'/cakes'} content={`Cakes`} />
      <Menu.Item as={Link} to={'/amenities'} content={`Amenities`} />
      <Menu.Item as={Link} to={'/food-truck'} content={`Food Truck`} />
      <Menu.Item as={Link} to={'/special-orders'} content={`Special Orders`} />
      <Menu.Item as={Link} to={'/owner'} content={`Meet the owner`} />
    </>
  );
}

export default NavMenuItems;
