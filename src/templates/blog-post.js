import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

import "./blog-post.scss"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const postAuthor = post.frontmatter.author || "House"

    // replace any series of non alphanumeric characters with a dash to make sure that CSS can handle the classname
    // this transforms 
    //   "Dave" into "dave", 
    //   "Dave & Chris" into "dave-chris", 
    //    and "ça c'est le chiffre       27" into "-a-c-est-le-chiffre-27"
    const bodyClass = `author--${postAuthor.toLowerCase().replace(/[\W_]+/g,"-")}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <body className={bodyClass} />
        </Helmet>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="Post">
          <header className="Post__details">
            <h1 className="Post__title">{post.frontmatter.title}</h1>
            <div><small>By {postAuthor}</small></div>
            <div><small>{post.frontmatter.date}</small></div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>

        <nav>
          <ul className="Post__navlinks">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`
