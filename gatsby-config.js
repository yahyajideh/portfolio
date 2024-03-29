module.exports = {
  siteMetadata: {
    title: 'Yahya Jideh',
    description: '',
    siteUrl: 'https://yahyajideh.com',
    twitterUsername: '@yahyajideh',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: { name: 'posts', path: 'posts' },
    // },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
  ],
};
