module.exports = {
  siteMetadata: {
    title: '島のパン家 〜ハナレ〜',
    description:
      '鳥羽から定期船で20分の絶景観光スポット答志島にある地元食材を使用した焼きたて創作パンのお店',
    address: '259 Momotorichō, Toba, Mie 517-0003, Japan',
    siteUrl: process.env.SITE_URL,
    gmap:
      'https://www.google.com/maps/place/%E5%B3%B6%E3%81%AE%E3%83%91%E3%83%B3%E5%AE%B6+%E3%80%9Chanare%E3%80%9C/@34.5152711,136.7133898,11z',
    phone: '0599-20-0099',
    phoneValue: '0599200099',
    author: 'mnishiguchi',
    facebook:
      'https://www.facebook.com/%E5%B3%B6%E3%81%AE%E3%83%91%E3%83%B3%E5%AE%B6-hanare-1104298032977143/',
    instagram:
      'https://www.instagram.com/explore/locations/1104298032977143/hanare/',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
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
        siteUrl: process.env.SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `海山道神社`,
        short_name: `hanarecafe`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
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
