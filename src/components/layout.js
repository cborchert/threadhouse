import React from "react"
import { Link } from "gatsby"

import { Thread } from "./SiteLogo/SiteLogo"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, hideHeader, children } = this.props
    const header = title && !hideHeader && (
      <h3
        className="serif"
        style={{
          margin: "20px",
          fontSize: "1.5rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <Thread
            style={{
              width: "40px",
              margin: "0 10px 0",
              verticalAlign: "middle",
            }}
          />
          {title}
        </Link>
      </h3>
    )
    return (
      <React.Fragment>
        <header>{header}</header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
