import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import NavLink from './NavLink';

function NavMenuItems() {
  const { t } = useTranslation();

  /* prettier-ignore */
  return (
    <>
      <Menu.Item as={NavLink} to={'/pastries'} content={t(`pages.pastries.link-label`)} />
      <Menu.Item as={NavLink} to={'/cakes'} content={t(`pages.cakes.link-label`)} />
      <Menu.Item as={NavLink} to={'/amenities'} content={t(`pages.amenities.link-label`)} />
      <Menu.Item as={NavLink} to={'/food-truck'} content={t(`pages.food-truck.link-label`)} />
      <Menu.Item as={NavLink} to={'/special-orders'} content={t(`pages.special-orders.link-label`)} />
      <Menu.Item as={NavLink} to={'/meet-the-owner'} content={t(`pages.meet-the-owner.link-label`)} />
    </>
  );
}

export default NavMenuItems;
