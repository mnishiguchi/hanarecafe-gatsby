import React from 'react';
import { Container } from 'semantic-ui-react';

function AppContentContainer({ children }) {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      {children}
    </Container>
  );
}

export default AppContentContainer;
