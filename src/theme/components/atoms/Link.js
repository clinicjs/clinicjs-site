import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

// Due to prop passthrough remove any modifier props that should not
// be pased directly to the underlying element
const linkPropBlacklist = [
  'active',
  'inverted',
  'primary',
  'block',
  'sm',
  'noArrow',
  'bold',
  'current',
  'nested',
  'navOpen',
  'inline',
  'disabled',
  'thin'
]

const Link = ({ children, ...props }) => {
  const componentProps = { ...props }

  linkPropBlacklist.forEach(prop => delete componentProps[prop])

  if (componentProps.to) {
    return <GatsbyLink {...componentProps}>{children}</GatsbyLink>
  }

  if (componentProps.href) {
    // Ensure external links open in a new tab
    if (componentProps.href.match(/(http(s)?):\/\//)) {
      componentProps.target = '_blank'
    }

    // Ensure _blank links are safe
    if (componentProps.target === '_blank' && !componentProps.rel) {
      componentProps.rel = 'noopener noreferrer'
    }
  }

  return <a {...componentProps}>{children}</a>
}

export default Link
