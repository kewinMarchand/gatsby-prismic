import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteMetadata }) => (
  <header
    style={{
      background: `rebeccapurple`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ fontSize: 32, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteMetadata.title}
        </Link>
      </h1>
    </div>
  </header>
)

Navigation.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
}

export default Navigation
