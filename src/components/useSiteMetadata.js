import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            address
            phone
            phoneValue
            author
            gmap
            facebook
            instagram
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
