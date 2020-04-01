const siteUrl = `https://hanarecare.netlify.com`;

module.exports = {
  siteMetadata: {
    // Some plugins fetch this through graphql.
    siteUrl,
    gmap:
      'https://www.google.com/maps/place/%E5%B3%B6%E3%81%AE%E3%83%91%E3%83%B3%E5%AE%B6+%E3%80%9Chanare%E3%80%9C/@34.5152711,136.7133898,11z',
    facebook:
      'https://www.facebook.com/%E5%B3%B6%E3%81%AE%E3%83%91%E3%83%B3%E5%AE%B6-hanare-1104298032977143/',
    instagram:
      'https://www.instagram.com/explore/locations/1104298032977143/hanare/',
  },
  plugins: [
    {
      // For gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `島のパン家 〜HaNaRe〜`,
        short_name: `hanarecafe.com`,
        start_url: `/`,
        background_color: `#123`,
        theme_color: `#123`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `YOUR_GOOGLE_ANALYTICS_TRACKING_ID`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
