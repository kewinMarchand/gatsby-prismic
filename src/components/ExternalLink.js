import React from "react"
import PropTypes from "prop-types"

const ExternalLink = ({ to, label }) => {

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">{label}</a>
  )
}

ExternalLink.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string
}

export default ExternalLink
