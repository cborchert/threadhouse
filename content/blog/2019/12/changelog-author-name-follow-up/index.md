---
title: "Changelog: Add author name to posts (follow up)"
date: 2019-12-18T10:00
description: Author names are no available, and we can now do author-based styles for blog posts
author: Chris
---

Hi Dave,

I had a good time working on this new feature with you, and I wanted to do a recap of the most recent changes to the blog in addition to your write-up on the process.

Monday, we worked on implementing the author tag, exposing it on the frontend and setting things up for author-based styles.

## Background

To understand what exactly we did, it would help to understand our set up a bit.

In layman's terms, we use Gatsby to gather a bunch of markdown files, and create HTML from the contents of these files using a bunch of transformations. These files have content that is not transformed directly into HTML by Gatsby, which acts more like metadata for the posts, and that's called the `frontmatter`. All these fields (and some extras) are made available to our Gatsby files through a GraphQL server for us to use at build time.

We'll cover the details of our setup with Gatsby and how they work behind the scenes a bit more closely in another post, if you're interested.

## The changes

While we have access to the frontmatter of our markdown files as soon as we create the file, we don't necessarily expose every field that's available in the frontmatter. That means that you could technically add a field in the frontmatter called `foo` with the value "bar", but that would never show up on the site:

```md
---
title: "the post title"
date: 2019-12-18T10:00
description: a description
author: Chris
foo: "bar"
---

# Heading

The post content. Foo's is never exposed
```

In fact, that's what's been the case up until recently with the `author` field in the frontmatter: we had been adding `author: Chris` or `author: Dave` but it really didn't do anything up until now. Well this update changes that.

What we did was we added the `author` field to frontmatter of the markdown nodes in the GraphQL queries on [the individual blog post template](https://github.com/cborchert/threadhouse/blob/master/src/templates/blog-post.js) and on [the homepage template](https://github.com/cborchert/threadhouse/blob/master/src/pages/index.js).

For example the page query on the individual post page now looks something like this:

```js
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      # get the site metadata
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      # get the data for the blogpost with the slug
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        # THIS exposes the author string
        author
      }
    }
  }
`
```

Note that the author field now exists in `markdownRemark.frontmatter`. This is what will inject the author information into our component. You can learn a bit more about GraphQL and Gatsby [here](https://www.gatsbyjs.org/docs/graphql-concepts/).

From there, we just added the author name to the frontpage feed and the individual post page (defaulting to "House"). We additionally used the React Helmet component to add a class to the body based on the value of `author`.

```js
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postAuthor = post.frontmatter.author || "House"
    // replace any series of non alphanumeric characters with a dash to make sure that CSS can handle the classname
    // this transforms
    //   "Dave" into "dave",
    //   "Dave & Chris" into "dave-chris",
    //    and "ça c'est le chiffre       27" into "-a-c-est-le-chiffre-27"
    const bodyClass = `author--${postAuthor
      .toLowerCase()
      .replace(/[\W_]+/g, "-")}`

    return (
      <Layout>
        <Helmet>
          <body className={bodyClass} />
        </Helmet>
        {/* etc */}
      </Layout>
    )
  }
}
```

This little touch paves the way to adding author-specific styles. We just need to add some CSS/SCSS such as the following to the global styles or the blog post styles

```scss
body.author--minotaur {
  color: red;
  text-decoration: line-through;
}
```

which will make all the <span style="color: red; text-decoration: line-through;">text in the minotaur's posts red with a strikethrough</span>.

We can also add transitions so that if we switch from one post author to another we get nice smooth fade between the styles.

Anyway. I think that more or less covers it.

Take it easy, and happy authoring!

-- Chris
