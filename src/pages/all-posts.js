import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

import createPostMarkup from "../utils/createPostMarkup"

const allPosts = props => {
  // retrieving props.data and storing it in a variable called data
  // (this is called destructuring?)
  const { data } = props
  // get all the posts from the data
  const posts = data.allMarkdownRemark.edges
  const title = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Layout location={props.location} title={title}>
        <SEO title="All posts" />
        <h2>All posts</h2>
        <hr />
        {posts.map(createPostMarkup)}
      </Layout>
    </React.Fragment>
  )
}

export default allPosts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
          }
        }
      }
    }
  }
`
