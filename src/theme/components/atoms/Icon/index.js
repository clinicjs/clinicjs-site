import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  vertical-align: middle;

  ${props =>
    props.md &&
    `
    font-size: 1.5em;
  `}

  ${props =>
    props.lg &&
    `
    font-size: 2em;
  `}

  ${props =>
    props.xl &&
    `
    font-size: 4em;
  `}
`

const Icon = ({ children, fill = 'currentColor', ...props }) => (
  <IconWrapper {...props}>
    <Svg viewBox="0 0 64 64" fill={fill}>
      {children}
    </Svg>
  </IconWrapper>
)

export default Icon
