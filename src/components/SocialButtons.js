import React from 'react';
import { Button } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import useSiteMetadata from './useSiteMetadata';

export default function SocialButtons() {
  const { facebook, instagram } = useSiteMetadata();

  return (
    <>
      <Button
        circular
        size="large"
        icon="instagram"
        color="purple"
        as={OutboundLink}
        href={instagram}
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="facebook"
        color="facebook"
        as={OutboundLink}
        href={facebook}
      />
    </>
  );
}
