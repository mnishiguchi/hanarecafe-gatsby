import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'semantic-ui-react';

import Layout from '../components/Layout';

function NotFoundPage() {
  return (
    <Layout>
      <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link to={'/'}>Back</Link>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
