const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const threads = require(`./threads.js`)

const blogPost = path.resolve(`./src/templates/blog-post.js`)
const threadPage = path.resolve(`./src/templates/thread-page.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postsResults = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (postsResults.errors) {
    throw postsResults.errors
  }

  // Create blog posts pages.
  const posts = postsResults.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  threads.forEach(({ name, slug, description }) => {
    createPage({
      path: `thread/${slug}`,
      component: threadPage,
      context: {
        thread: slug,
        name,
        description,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
