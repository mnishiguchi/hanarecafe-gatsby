import React from 'react';
import { Link } from 'gatsby';

import logoSvg from '../img/logo-horizontal.svg';

const LogoLink = ({ width = '200', height = '' }) => (
  <Link to={'/'}>
    <img src={logoSvg} alt="logo" width={width} height={height} />
  </Link>
);

export default LogoLink;
