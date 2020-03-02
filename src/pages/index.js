import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SiteLogo from "../components/SiteLogo/SiteLogo"
import SEO from "../components/SEO/SEO"

import createPostMarkup from "../utils/createPostMarkup"
import threads from "../../threads"

import "./Home.scss"

class BlogIndex extends React.Component {
  render() {
    // retrieving this.props.data and storing it in a variable called data
    // (this is called destructuring?)
    const { data } = this.props
    // get all the posts from the data
    const posts = data.allMarkdownRemark.edges

    return (
      <React.Fragment>
        <SiteLogo />
        <Layout location={this.props.location} hideHeader={true}>
          <SEO title="Home" />
          <hr />
          <h2 className="Home__postsIntro">Threads</h2>
          <ul>
            <li>
              <Link to={`all-posts`}>All posts</Link>
            </li>
            {threads.map(({ name, slug }) => (
              <li key={slug}>
                <Link to={`thread/${slug}`}>{name}</Link>
              </li>
            ))}
          </ul>
          <hr />
          <h2 className="Home__postsIntro">Most Recent Posts</h2>
          {posts.map(createPostMarkup)}
        </Layout>
      </React.Fragment>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
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
