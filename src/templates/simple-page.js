import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';

import PageHelmet from '../components/PageHelmet';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export function SimplePageTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <PageHelmet />

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />
    </Container>
  );
}

SimplePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

function SimplePage({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SimplePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
}

SimplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default SimplePage;

export const pageQuery = graphql`
  query SimplePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
