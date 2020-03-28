import React from 'react';
import { Button } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';

// https://github.com/fisshy/react-scroll
const onClick = () => scroll.scrollToTop({ duration: 200 });

const BackToTopLink = (props) => {
  return <Button basic icon={'angle up'} onClick={onClick} {...props} />;
};

export default BackToTopLink;
