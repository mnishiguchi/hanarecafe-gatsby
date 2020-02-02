import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.png';

const LogoLink = ({ width = '32', height = '' }) => (
  <Link to={'/'}>
    <img src={logo} alt="logo" width={width} height={height} />
  </Link>
);

export default LogoLink;
