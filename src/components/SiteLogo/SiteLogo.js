import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import thread from "./thread.svg"

import "./SiteLogo.css"

// TODO URGENT CREDIT AUTHOR
{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)
  const { author, description } = data.site.siteMetadata

  return (
    <div className="SiteLogo">
      <h1 className="SiteLogo__title serif">
        <span>THREAD</span>
        <span>
          <Thread />
        </span>
        <span>HOUSE</span>
      </h1>
      <hr />
      <div className="SiteLogo__description">
        <div>{description}</div>
        <div>
          written by <strong>{author}</strong>
        </div>
      </div>
    </div>
  )
}

export const Thread = ({ style = {} }) => (
  <img className="SiteLogo__threadIcon" style={style} src={thread} />
)

export default SiteLogo
