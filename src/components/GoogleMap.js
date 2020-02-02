import React from 'react';

export const GoogleMap = ({ title, ...rest }) => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210400.72494082188!2d136.71338976783878!3d34.5152710873741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004f8460a7c4f27%3A0x5001db4cfaa59d23!2z5bO244Gu44OR44Oz5a62IOOAnGhhbmFyZeOAnA!5e0!3m2!1sen!2sus!4v1580672261506!5m2!1sen!2sus"
    width="100%"
    height="450"
    frameBorder="0"
    allowFullScreen=""
    title={title}
    {...rest}
  />
);

export default GoogleMap;
