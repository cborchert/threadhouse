import React from "react"
import { graphql } from "gatsby"

import createPostMarkup from "../utils/createPostMarkup.js"

import Layout from "../components/Layout/Layout"

const threadTemplate = props => {
  const {
    pageContext: { name, description },
    location,
    data: {
      allMarkdownRemark: { edges },
      site: {
        siteMetadata: { title },
      },
    },
  } = props
  return (
    <Layout location={location} title={title}>
      <h2>{`${name} Posts`}</h2>
      {description && <p>{description}</p>}
      <hr />
      {edges.map(createPostMarkup)}
    </Layout>
  )
}

export default threadTemplate

export const pageQuery = graphql`
  query TestQuery($thread: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { threads: { in: [$thread] } } }) {
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
