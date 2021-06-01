import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import IconMenu from '../../atoms/Icon/Menu'
import { breakpointMd, breakpointXl, divide, multiply } from '../../../helpers'

const Outer = styled.div`
  ${breakpointMd`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 2;
  `};
`

const Inner = styled.nav`
  display: ${props => (props.open ? 'block' : 'none')};
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - ${props => props.theme.dimension.header.height});
  margin: ${props => `
        ${props.theme.dimension.spacer.sm}
        -${props.theme.dimension.spacer.sm}
        -${props.theme.dimension.spacer.sm}
      `};
  background-color: ${props =>
    props.inverted
      ? props.theme.colour.accent.primary
      : props.theme.colour.transparent.black.lightest};
  color: ${props => (props.inverted ? 'white' : 'inherit')};

  ${breakpointMd`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 2;
    overflow: visible;
    max-height: none;
    margin: 0;
    background-color: transparent;
    color: inherit;
  `};
`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1;
  border-bottom: solid ${props => props.theme.colour.transparent.white.lightest}
    1px;

  ${breakpointMd`
    display: flex;
    justify-content: center;
    flex-grow: 2;
    padding: 0;
    border-bottom: 0;
  `};
`

const NavListItem = styled.li`
  ${props =>
    props.hasButton &&
    `
    display: grid;
    grid-template-columns: 1fr;
    padding: ${divide(props.theme.dimension.spacer.sm, 1.5)};
  `}

  ${breakpointMd`
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
  `}

  ${breakpointXl(
    props => `
    padding-right: ${divide(
      props.theme.dimension.spacer.sm,
      props.hasButton ? 1 : 3
    )};
    padding-left: ${
      props.hasButton ? 0 : divide(props.theme.dimension.spacer.sm, 3)
    };
  `
  )}
`

const NavLink = styled(Link)`
  display: block;
  position: relative;
  padding: ${props => props.theme.dimension.spacer.sm};
  text-decoration: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${props => props.theme.colour.transparent.black.lightest};
  }

  ${props =>
    props.active &&
    `
    background-color: ${props.theme.colour.transparent.black.lightest};

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: white;
    }
  `}

  ${breakpointMd(
    props => `
    padding:
      ${divide(props.theme.dimension.spacer.sm, 2)}
      ${divide(props.theme.dimension.spacer.sm, 1.5)};
  `
  )}

  ${breakpointMd(
    props =>
      props.active &&
      `
    font-weight: ${props.theme.font.weight.bold};
    background-color: transparent;

    &:focus {
      background-color: ${props.theme.colour.transparent.black.lightest};
    }

    &:after {
      content: '';
      position: absolute;
      left: ${divide(props.theme.dimension.spacer.sm, 2)};
      right: ${divide(props.theme.dimension.spacer.sm, 2)};
      top: auto;
      height: 2px;
      width: auto;
      background-color: ${
        props.inverted ? props.theme.colour.accent.primary : 'white'
      };
    }
  `
  )}
`

const NavToggle = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${props => multiply(props.theme.dimension.spacer.sm, 1.1)};
  right: ${props => props.theme.dimension.spacer.sm};
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;

  &:focus {
    background-color: ${props => props.theme.colour.transparent.black.lightest};
  }

  ${breakpointMd`
    display: none;
  `};
`

const NavToggleText = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  color: transparent;
  overflow: hidden;
  text-indent: -200vw;
`

class Nav extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    navOpen: false
  }

  handleToggleClick = e => {
    e.preventDefault()
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render = () => {
    const { children, inverted, navLinks, cta } = this.props
    const { navOpen } = this.state

    return (
      <Outer>
        <Inner open={navOpen} inverted={inverted}>
          <NavList>
            {cta && <NavListItem hasButton>{cta}</NavListItem>}
            {navLinks.map((itemProps, i) => (
              <NavListItem key={i}>
                <NavLink {...itemProps} inverted={inverted} />
              </NavListItem>
            ))}
          </NavList>
          {children}
        </Inner>
        <NavToggle onClick={this.handleToggleClick} inverted={inverted}>
          <IconMenu />
          <NavToggleText>{navOpen ? 'Close' : 'Open'} menu</NavToggleText>
        </NavToggle>
      </Outer>
    )
  }
}

Nav.propTypes = {
  inverted: PropTypes.bool,
  navLinks: PropTypes.arrayOf(PropTypes.object),
  cta: PropTypes.element
}

export default Nav
