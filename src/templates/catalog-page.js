// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import { Card, Container, Grid, Header, Segment } from 'semantic-ui-react';
// import Media from 'react-media';

// import PageHelmet from '../components/PageHelmet';
// import Layout from '../components/Layout';
// import Content, { HTMLContent } from '../components/Content';

// export function CatalogPageTemplate({
//   content,
//   contentComponent,
//   description,
//   title,
//   helmet,
//   categories = [],
//   catalogItems = [],
// }) {
//   const PostContent = contentComponent || Content;

//   return (
//     <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
//       <PageHelmet  />

//       <h1>{title}</h1>
//       <p>{description}</p>

//       <PostContent content={content} />

//       {categories.map(category => {
//         const filteredItems = catalogItems.filter(
//           item => item.category === category.title
//         );

//         return (
//           <Segment vertical key={category.title}>
//             <Header>{category.title}</Header>
//             <p>{category.description}</p>

//             <Media query={{ maxWidth: 599 }}>
//               {matches =>
//                 matches ? (
//                   // For mobile, each card takes full width.
//                   filteredItems.map(({ image, title, description }) => {
//                     const imageUrl = !!image.childImageSharp
//                       ? image.childImageSharp.fluid.src
//                       : image;
//                     return (
//                       <Card
//                         key={imageUrl}
//                         image={imageUrl}
//                         header={title}
//                         description={description}
//                         fluid
//                       />
//                     );
//                   })
//                 ) : (
//                   // For larger devices, switch column count per row.
//                   <Grid doubling columns={5}>
//                     {filteredItems.map(({ image, title, description }) => {
//                       const imageUrl = !!image.childImageSharp
//                         ? image.childImageSharp.fluid.src
//                         : image;
//                       return (
//                         <Grid.Column key={imageUrl}>
//                           <Card
//                             image={imageUrl}
//                             header={title}
//                             description={description}
//                           />
//                         </Grid.Column>
//                       );
//                     })}
//                   </Grid>
//                 )
//               }
//             </Media>
//           </Segment>
//         );
//       })}
//     </Container>
//   );
// }

// CatalogPageTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   categories: PropTypes.array,
//   catalogItems: PropTypes.array,
// };

// function CatalogPage({ data: { markdownRemark } }) {
//   return (
//     <Layout>
//       <CatalogPageTemplate
//         content={markdownRemark.html}
//         contentComponent={HTMLContent}
//         title={markdownRemark.frontmatter.title}
//         description={markdownRemark.frontmatter.description}
//         categories={markdownRemark.frontmatter.categories}
//         catalogItems={markdownRemark.frontmatter.catalogItems}
//       />
//     </Layout>
//   );
// }

// CatalogPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// };

// export default CatalogPage;

// export const pageQuery = graphql`
//   query CatalogPageByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         title
//         description
//         categories {
//           title
//           description
//         }
//         catalogItems {
//           category
//           title
//           description
//           image {
//             childImageSharp {
//               fluid(maxWidth: 600, quality: 64) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
