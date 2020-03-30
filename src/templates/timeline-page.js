import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Message } from 'semantic-ui-react';

import PageHelmet from '../components/PageHelmet';
import Layout from '../components/Layout';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';
import FacebookTimeline from '../components/FacebookTimeline';

// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function TimelinePageTemplate({ content }) {
  const { pageTitle, pageDescription } = useSiteMetadata();

  return (
    <AppContentContainer>
      <PageHelmet />

      <section style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {content && (
          <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Message>
        )}
      </section>

      <FacebookTimeline />
    </AppContentContainer>
  );
}

TimelinePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
};

function TimelinePage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <TimelinePageTemplate content={markdownRemark.html} />
    </Layout>
  );
}

TimelinePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TimelinePage;

export const pageQuery = graphql`
  query TimelinePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`;
