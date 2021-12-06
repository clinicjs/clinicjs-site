import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import StyledHeader from '../theme/components/molecules/Header'
import Button from '../theme/components/atoms/Button'

const navLinks = [
  {
    to: '/documentation/',
    children: 'Docs'
  },
  {
    to: '/doctor/',
    children: 'Doctor'
  },
  {
    to: '/flame/',
    children: 'Flame'
  },
  {
    to: '/bubbleprof/',
    children: 'Bubbleprof'
  },
  {
    to: '/heapprofiler/',
    children: 'Heap Profiler'
  },
  {
    to: '/blog/',
    children: 'Blog'
  },
  {
    to: '/about/',
    children: 'About'
  }
]

const Header = ({ currentPath, ...props }) => {
  const headerProps = {
    ...props,
    logoPath: '/',
    navLinks: navLinks.map(item => ({
      ...item,
      // Add active prop to highlight NavLink
      active: currentPath.indexOf(item.to) === 0
    }))
   }

  return (
    <React.Fragment>
      <StyledHeader {...headerProps} />
    </React.Fragment>
  )
}

Header.propTypes = {
  currentPath: PropTypes.string
}

export default Header
