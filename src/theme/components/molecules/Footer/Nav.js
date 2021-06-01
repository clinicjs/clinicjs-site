import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import { breakpointMd, divide } from '../../../helpers'

const Outer = styled.nav`
  padding: ${props => divide(props.theme.dimension.spacer.sm, 2)};
  margin-top: 0;
  margin-bottom: ${props => props.theme.dimension.spacer.sm};
  border-top: solid ${props => props.theme.colour.transparent.white.lightest}
    1px;
  border-bottom: solid ${props => props.theme.colour.transparent.white.lightest}
    1px;

  ${breakpointMd`
    margin: 0;
    padding: 0;
    border: 0;
  `};
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: ${props => props.theme.font.weight.bold};
  text-decoration: none;
  white-space: nowrap;
`

const Nav = ({ navLinks, ...props }) => (
  <Outer {...props}>
    <NavList>
      {navLinks.map((itemProps, i) => (
        <li key={i}>
          <NavLink {...itemProps} />
        </li>
      ))}
    </NavList>
  </Outer>
)

export default Nav
