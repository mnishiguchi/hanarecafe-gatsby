import React from 'react';
import { Button } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';

// https://github.com/fisshy/react-scroll
const onClick = () => scroll.scrollToTop({ duration: 200 });

const BackToTopLink = () => {
  return <Button basic inverted icon={'angle up'} onClick={onClick} />;
};

export default BackToTopLink;
