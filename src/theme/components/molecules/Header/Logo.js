import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconClinic from '../../atoms/Icon/Clinic'
import Link from '../../atoms/Link'
import { breakpointLg } from '../../../helpers'

const LogoLink = styled(Link)`
  font-size: 1.5rem;

  ${breakpointLg`
    font-size: 2rem;
  `};
`

const LogoText = styled.span`
  display: inline-block;
  line-height: 1;
  padding-left: 0.25em;
  transform: translateY(0.1em);

  & sub {
    position: static;
    font-size: 0.4em;
  }
`

const Logo = props => (
  <LogoLink {...props}>
    <IconClinic fill="currentColor" md />
    <LogoText>
      Clinic
      <sub>js</sub>
    </LogoText>
  </LogoLink>
)

Logo.propTypes = {
  inverted: PropTypes.bool
}

export default Logo
