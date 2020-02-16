const siteMetadata = {
  name: `MetaGame`,
  author: `@MetaFam`,
  description: `🐙 A Massive Online Coordination Game`,
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/metafam`,
    },
    {
      name: `github`,
      url: `https://github.com/MetaFam`,
    },
  ],
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: '#5035be',
        background_color: 'white',
        icon: 'src/assets/favicon.png',
        lang: 'en-US',
        start_url: '/',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
