import React from 'react';
import { Button } from 'semantic-ui-react';

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
        as="a"
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
      />
      <span style={{ marginLeft: '1rem' }}></span>
      <Button
        circular
        size="large"
        icon="facebook"
        color="facebook"
        as="a"
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
      />
    </>
  );
}
