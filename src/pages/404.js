import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const NotFoundPage = ({ data }) => (
  <Layout location={this.props.location} title={data.site.siteMetadata.title}>
    <SEO title="404: Not Found" />
    <h1>
      Not Found{" "}
      <span role="img" aria-label="skull">
        💀
      </span>
    </h1>
  </Layout>
)
export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
