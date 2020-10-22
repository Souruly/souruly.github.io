const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const requiresTemplate = [`blog`, `projects`, `notes`]

const getContentType = node =>
node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1]

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const contentType = getContentType(node)
    const path = `content/${contentType}/`
    const { createNodeField } = actions
    
    const slug = createFilePath({ node, getNode, basePath: path })
    createNodeField({ node, name: `slug`, value: `${slug}` })
    
    if (requiresTemplate.includes(contentType)) {
      createNodeField({
        node,
        name: `templatePath`,
        value: `./src/templates/${contentType}-post-template.js`,
      })
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              templatePath
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const contentType = node.fields.slug.split(`/`)[1]
    if (requiresTemplate.includes(contentType)) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(node.fields.templatePath),
        context: {
          //   Data passed to context is available in page queries as graphql variables
          slug: node.fields.slug,
          templatePath: node.fields.templatePath,
        },
      })
    }
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  if (process.env.NODE_ENV !== 'development') {
    actions.setBabelPlugin({
      name: '@babel/plugin-transform-regenerator',
      options: {},
    });
    actions.setBabelPlugin({
      name: '@babel/plugin-transform-runtime',
      options: {},
    });
  }
};