import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo-horizontal.svg';

const LogoLink = ({ width = '200', height = '', src = logo }) => (
  <Link to={'/'}>
    <img src={src} alt="logo" width={width} height={height} />
  </Link>
);

export default LogoLink;
