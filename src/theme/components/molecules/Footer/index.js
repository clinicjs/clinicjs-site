import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageContainer from '../../atoms/PageContainer'
import Nav from './Nav'
import IconNav from './IconNav'
import { breakpointMd } from '../../../helpers'

const Outer = styled.footer`
  background-color: ${props => props.theme.colour.accent.primary};
  color: white;
`

const Inner = styled(PageContainer)`
  position: relative;
  padding: ${props => props.theme.dimension.spacer.sm};
  text-align: center;

  ${breakpointMd`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  `};
`

const Footer = ({ gitHubUrl, rssUrl, navLinks = [] }) => (
  <Outer>
    <Inner>
      <Nav navLinks={navLinks} />
      <IconNav gitHubUrl={gitHubUrl} rssUrl={rssUrl} />
    </Inner>
  </Outer>
)

Footer.propTypes = {
  gitHubUrl: PropTypes.string,
  rssUrl: PropTypes.string,
  navLinks: PropTypes.arrayOf(PropTypes.object)
}

export default Footer
