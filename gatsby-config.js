module.exports = {
  siteMetadata: {
    title: `WaleeWorld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
