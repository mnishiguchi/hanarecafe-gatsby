module.exports = {
  siteMetadata: {
    title: '海山道神社',
    description:
      '海山道開運稲荷さまは海でも山でも道をきり開いて開運を運んで下さる尊いお稲荷さまということで、お金やお客様を運べば商売繁盛、車や船を運んで交通安全・海上安全・旅行安全、筆を運んで受験合格・就職出世成功、その他縁結、子授、安産、病気平癒、借金取り等道を切り開いて都合よくお運びいただく開運諸願成就のあしどめ稲荷さまです。',
    address: '三重県四日市市海山道町1丁目62番地',
    siteUrl: process.env.SITE_URL,
    gmap:
      'https://www.google.com/maps/place/Miyamado+Shrine/@34.9430372,136.6211072,18z',
    phone: '059-345-5419',
    phoneIntl: '+81593455419',
    email: 'miyamado@m7.cty-net.ne.jp',
    author: 'mnishiguchi',
    facebook:
      'https://www.facebook.com/%E6%B5%B7%E5%B1%B1%E9%81%93%E7%A5%9E%E7%A4%BE-137077743078473/',
    instagram: 'https://www.instagram.com/miyamado_shrine/',
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
        siteUrl: process.env.SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `海山道神社`,
        short_name: `miyamadojinja`,
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
