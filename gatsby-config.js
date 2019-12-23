/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/**
 # Purge Using yarn
yarn add @fullhuman/postcss-purgecss -D
https://tailwindcss.com/docs/controlling-file-size/

yard add gatsby-plugin-purgecss

{
  resolve: `gatsby-plugin-purgecss`,
  option: {
    printRejected: false,
    develop: false,
    tailwind: true,
  },
},

**/

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
  ],
}
