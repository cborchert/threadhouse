import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SiteLogo from "../components/SiteLogo/SiteLogo"
import SEO from "../components/SEO/SEO"

import "./Home.scss"

/**
 * Given the post data, creates a preview
 * @param {Object} item 
 * @returns {JSX} the post item
 */
const createPost = (item) => {
  const { node } = item;
  const title = node.frontmatter.title || node.fields.slug;
  const author = node.frontmatter.author || "House";

  return (
    <article key={node.fields.slug} className="Home__post">
      <header>
        <h2 className="Home__postTitle">
          <Link to={node.fields.slug}>{title}</Link>
        </h2>
        <div><small>By {author}</small></div>
        <div><small>{node.frontmatter.date}</small></div>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

class BlogIndex extends React.Component {
  render() {
    // retrieving this.props.data and storing it in a variable called data
    // (this is called destructuring?)
    const { data } = this.props
    // get all the posts from the data
    const posts = data.allMarkdownRemark.edges

    console.log(posts)

    return (
      <React.Fragment>
        <SiteLogo />
        <Layout location={this.props.location} hideHeader={true}>
          <SEO title="All posts" />
          <h2 className="Home__postsIntro">Posts</h2>
          <hr />
          {posts.map(createPost)}
        </Layout>
      </React.Fragment>
    )
  }
}

export default BlogIndex

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
