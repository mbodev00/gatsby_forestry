/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const path = require('path');
  
    const posts = await graphql(`
    {
      allMarkdownRemark
      {
        edges {
          node {
            id
            frontmatter{
              path
              title
              excerpt
              published
              content
            }
          }
        }
      }
    }
    `);


    posts.data.allMarkdownRemark.edges.forEach(({node}) => {

      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/post-template.js`)
      })
    })
  }