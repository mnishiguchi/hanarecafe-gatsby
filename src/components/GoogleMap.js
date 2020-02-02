import React from 'react';

export const GoogleMap = ({ title, ...rest }) => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d418628.197999312!2d136.3412309250019!3d34.943252499999986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60038ecd8e3d43dd%3A0xc695f13a514d79d5!2z5rW35bGx6YGT56We56S-!5e0!3m2!1sja!2sus!4v1579314598423!5m2!1sja!2sus"
    width="100%"
    height="450"
    frameBorder="0"
    allowFullScreen=""
    title={title}
    {...rest}
  />
);

export default GoogleMap;
