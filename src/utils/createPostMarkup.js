import React from "react"
import { Link } from "gatsby"

/**
 * Given the post data, creates a preview
 * @param {Object} item
 * @returns {JSX} the post item
 */
const createPostMarkup = item => {
  const { node } = item
  const title = node.frontmatter.title || node.fields.slug
  const author = node.frontmatter.author || "House"

  return (
    <article key={node.fields.slug} className="Home__post">
      <header>
        <h2 className="Home__postTitle">
          <Link to={node.fields.slug}>{title}</Link>
        </h2>
        <div>
          <small>By {author}</small>
        </div>
        <div>
          <small>{node.frontmatter.date}</small>
        </div>
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

export default createPostMarkup
