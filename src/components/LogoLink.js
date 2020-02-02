import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';

const LogoLink = ({ width = '', height = '' }) => (
  <Link to={'/'}>
    <img src={logo} alt="logo" width={width} height={height} />
  </Link>
);

export default LogoLink;
