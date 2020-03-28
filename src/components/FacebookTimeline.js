import React from 'react';

export const FacebookTimeline = ({ title, style = {}, ...rest }) => (
  <div
    style={{
      alignItems: `center`,
      display: `flex`,
      justifyContent: `center`,
    }}
  >
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E5%25B3%25B6%25E3%2581%25AE%25E3%2583%2591%25E3%2583%25B3%25E5%25AE%25B6-hanare-1104298032977143%2F&tabs=timeline&width=300&height=3333&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
      width="300"
      height="3333"
      style={{ overflowY: 'auto', ...style }}
      scrolling="no"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title={title}
      {...rest}
    />
  </div>
);

export default FacebookTimeline;
