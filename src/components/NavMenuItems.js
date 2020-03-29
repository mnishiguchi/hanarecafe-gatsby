import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import NavLink from './NavLink';

function NavMenuItems() {
  const { t } = useTranslation();

  /* prettier-ignore */
  return (
    <>
      <Menu.Item as={NavLink} to={'/pastries'} content={t(`nav-menu-items.pastries`)} />
      <Menu.Item as={NavLink} to={'/cakes'} content={t(`nav-menu-items.cakes`)} />
      <Menu.Item as={NavLink} to={'/amenities'} content={t(`nav-menu-items.amenities`)} />
      <Menu.Item as={NavLink} to={'/food-truck'} content={t(`nav-menu-items.food-truck`)} />
      <Menu.Item as={NavLink} to={'/special-orders'} content={t(`nav-menu-items.special-orders`)} />
      <Menu.Item as={NavLink} to={'/meet-the-owner'} content={t(`nav-menu-items.meet-the-owner`)} />
    </>
  );
}

export default NavMenuItems;
