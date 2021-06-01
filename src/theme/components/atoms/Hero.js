import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ContentContainer from './ContentContainer'
import { breakpointMd, breakpointLg } from '../../helpers'

const HeroWrapper = styled.div`
  padding: ${props => props.theme.dimension.spacer.md} 0;
  background-color: ${props => props.theme.colour.accent.primary};
  color: white;

  ${breakpointMd(
    props => `
    padding: ${props.theme.dimension.spacer.lg} 0;
  `
  )};

  ${breakpointLg(
    props => `
    padding: ${props.theme.dimension.spacer.xl} 0;
  `
  )};
`

const Hero = ({ children }) => (
  <ThemeProvider
    theme={{
      colourAccentPrimary: 'white'
    }}
  >
    <HeroWrapper>
      <ContentContainer>{children}</ContentContainer>
    </HeroWrapper>
  </ThemeProvider>
)

export default Hero
