import React from 'react';

import I18nLink from './I18nLink';

const NavLink = (props) => (
  <I18nLink
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the anchor element's props
      return {
        disabled: isCurrent,
        style: {
          color: isCurrent ? '#ccc' : 'inherit',
          cursor: isCurrent ? 'none' : 'pointer',
        },
      };
    }}
  />
);

export default NavLink;
