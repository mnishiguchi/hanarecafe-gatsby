import React from 'react';

export const GoogleMap = ({ title, ...rest }) => (
  <iframe
    src="https://maps.google.com/maps?q=%E4%B8%89%E9%87%8D%E7%9C%8C%E9%B3%A5%E7%BE%BD%E5%B8%82%E6%A1%83%E5%8F%96%E7%94%BA259%E7%95%AA%E5%9C%B0&t=&z=10&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="450"
    frameBorder="0"
    allowFullScreen=""
    title={title}
    {...rest}
  />
);

export default GoogleMap;
