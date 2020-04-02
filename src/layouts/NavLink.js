import React from 'react';

import I18nLink from '../components/I18nLink';

const NavLink = (props) => (
  <I18nLink
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the anchor element's props
      return {
        disabled: isCurrent,
        style: {
          color: isCurrent ? '#999' : 'inherit',
          cursor: isCurrent ? 'initial' : 'pointer',
          textDecoration: isCurrent ? 'underline' : '',
        },
      };
    }}
  />
);

export default NavLink;
