import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import KeidaiContent from '../components/KeidaiContent';

export function KeidaiPageTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <SEO title={title} description={description} />

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />

      <KeidaiContent />
    </Container>
  );
}

KeidaiPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

function KeidaiPage({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <KeidaiPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
}

KeidaiPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default KeidaiPage;

export const pageQuery = graphql`
  query KeidaiPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
