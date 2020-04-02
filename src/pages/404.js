import React from 'react';
import { Container } from 'semantic-ui-react';

import Layout from '../layouts/index';
import I18nLink from '../components/I18nLink';

function NotFoundPage() {
  return (
    <Layout>
      <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <I18nLink to={'/'}>Back</I18nLink>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
