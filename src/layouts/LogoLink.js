import React from 'react';

import I18nLink from '../components/I18nLink';
import logoSvg from '../img/logo-horizontal.svg';

const LogoLink = ({ width = '200', height = '' }) => (
  <I18nLink to={'/'}>
    <img src={logoSvg} alt="logo" width={width} height={height} />
  </I18nLink>
);

export default LogoLink;
