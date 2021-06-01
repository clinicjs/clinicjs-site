import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Toggle, ToggleChevron } from './Toggle'
import Breadcrumbs from './Breadcrumbs'
import { List, ListLink } from './List'

const generateBreadcrumbsFromLinks = links => {
  const breadCrumbs = links.filter(
    item => item.active || item.links.filter(child => child.active).length
  )
  const subBreadcrumbs = breadCrumbs.length
    ? generateBreadcrumbsFromLinks(breadCrumbs[0].links)
    : []

  return breadCrumbs.concat(subBreadcrumbs)
}

const Outer = styled.nav`
  position: relative;
`

const Inner = ({ links, nested, open, navOpen }) => (
  <List nested={nested} open={open} navOpen={navOpen}>
    {links.map(item => {
      const active =
        item.active || item.links.filter(link => link.active).length

      return (
        <li key={item.path}>
          <ListLink
            to={item.path}
            active={active}
            current={item.active}
            nested={nested}
            navOpen={navOpen}
          >
            {item.label}
          </ListLink>
          {item.links.length > 0 && (
            <Inner links={item.links} nested open={active} navOpen={navOpen} />
          )}
        </li>
      )
    })}
  </List>
)

class SideNav extends React.Component {
  state = {
    navOpen: false
  }

  handleClick = e => {
    e.preventDefault()
    this.setState(
      {
        navOpen: !this.state.navOpen
      },
      () => {
        if (this.props.onNavToggle) {
          this.props.onNavToggle(this.state.navOpen)
        }
      }
    )
  }

  render = () => {
    const {
      handleClick,
      state: { navOpen }
    } = this
    const breadcrumbs = generateBreadcrumbsFromLinks(this.props.links)

    return (
      <Outer>
        <Toggle onClick={handleClick} active={navOpen}>
          <Breadcrumbs breadcrumbs={breadcrumbs} active={navOpen} />
          <ToggleChevron active={navOpen} />
        </Toggle>
        <Inner {...{ ...this.props, navOpen }} />
      </Outer>
    )
  }
}

SideNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  onNavToggle: PropTypes.func
}

export default SideNav
