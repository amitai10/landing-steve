/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'מהמטבח של סטיב',
    subTitle: 'להזמנות 052-8083737',
    logo: 'logo.jpeg',
    description: `מהמטבח של סטיב פרנקל - מהמטבח ישירות אליכם, אירועי בוטיק, הזמנת אוכל לבית, אירועים בחצר`,
    author: `steve frenkel`,
    // Netlify provides URL / DEPLOY_PRIME_URL. This keeps canonical URLs correct per deploy.
    siteUrl:
      process.env.URL ||
      process.env.DEPLOY_PRIME_URL ||
      `https://example.com`,
    phone: `052-8083737`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `סטיב פרנקל`,
        short_name: `סטיב`,
        start_url: `/`,
        background_color: `#bdf1ff`,
        theme_color: `#bdf1ff`,
        display: `standalone`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
  ],
}
