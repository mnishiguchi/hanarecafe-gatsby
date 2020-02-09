import React from 'react';

export const HanareIntroVideo = ({ title, style = {}, ...rest }) => (
  <iframe
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fatsushi.tokumoto.9%2Fvideos%2F1534736683322079%2F&width=500&show_text=false&height=280&appId"
    width="500"
    height="280"
    style={{ overflowY: 'auto', ...style }}
    scrolling="no"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
    title={title}
    {...rest}
  />
);

export default HanareIntroVideo;
