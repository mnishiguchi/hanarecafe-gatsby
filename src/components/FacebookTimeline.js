import React from 'react';

export const FacebookTimeline = ({ title, style = {}, ...rest }) => (
  <iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E6%25B5%25B7%25E5%25B1%25B1%25E9%2581%2593%25E7%25A5%259E%25E7%25A4%25BE-137077743078473%2F&tabs=timeline&width=300&height=2500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    width="300"
    height="2222"
    style={{ overflowY: 'auto', ...style }}
    scrolling="no"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
    title={title}
    {...rest}
  />
);

export default FacebookTimeline;
