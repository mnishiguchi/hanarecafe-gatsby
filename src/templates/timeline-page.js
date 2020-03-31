import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Message } from 'semantic-ui-react';

import Layout from '../components/Layout';
import MarkdownBody from '../components/MarkdownBody';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';
import FacebookTimeline from '../components/FacebookTimeline';

// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function TimelinePageTemplate({ markdownBody, isCms = false }) {
  const { pageTitle, pageDescription } = useSiteMetadata();

  return (
    <AppContentContainer>
      <section style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {markdownBody && (
          <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
            <MarkdownBody markdownBody={markdownBody} isCms={isCms} />
          </Message>
        )}
      </section>

      <FacebookTimeline />
    </AppContentContainer>
  );
}

TimelinePageTemplate.propTypes = {
  markdownBody: PropTypes.node.isRequired,
  isCms: PropTypes.bool.isRequired,
};

function TimelinePage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <TimelinePageTemplate markdownBody={markdownRemark.html} isCms={false} />
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
