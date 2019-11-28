import React from "react"
import { Link } from "gatsby"

import { Thread } from "../SiteLogo/SiteLogo"

import "./Layout.scss"

const Layout = ({ title, hideHeader, children }) => (
  <React.Fragment>
    <LayoutHeader title={title} hide={hideHeader} />
    <div className="Layout">
      <main>{children}</main>
    </div>
  </React.Fragment>
)

const LayoutHeader = ({ title, hide }) => {
  if (!title || hide) return null
  return (
    <header className="LayoutHeader">
      <h3 className="LayoutHeader__title">
        <Link className="LayoutHeader__link" to={`/`}>
          <Thread className="LayoutHeader__icon" />
          {title}
        </Link>
      </h3>
    </header>
  )
}
export default Layout
