import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageContainer from '../../atoms/PageContainer'
import { breakpointMd } from '../../../helpers'
import Logo from './Logo'
import Nav from './Nav'

const Outer = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${props => props.theme.colour.accent.primary};
  color: white;
  transition: background-color 0.2s ease-out;

  ${props =>
    props.inverted &&
    `
    background-color: white;
    color: ${props.theme.colour.accent.primary};
    border-bottom: solid ${props.theme.colour.grey.lightest} 1px;
  `};
`

const Inner = styled(PageContainer)`
  position: relative;
  padding: ${props => props.theme.dimension.spacer.sm};

  ${breakpointMd`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`

// Molecule definition
const Header = ({ logoPath, navLinks = [], inverted, cta }) => (
  <Outer inverted={inverted}>
    <Inner>
      <Logo to={logoPath} inverted={inverted} />
      <Nav navLinks={navLinks} inverted={inverted} cta={cta}>
      </Nav>
    </Inner>
  </Outer>
)

Header.propTypes = {
  logoPath: PropTypes.string,
  inverted: PropTypes.bool,
  navLinks: PropTypes.arrayOf(PropTypes.object),
  cta: PropTypes.element
}

export default Header
