import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import PageSection from '../../atoms/PageSection'
import ContentContainer from '../../atoms/ContentContainer'
import MediaGrid from '../../atoms/MediaGrid'
import FeatureList from '../../atoms/FeatureList'
import Button from '../../atoms/Button'
import Link from '../../atoms/Link'
import MediaContainer from '../../atoms/MediaContainer'
import { breakpointMd } from '../../../helpers'
import { getAttributes } from '../../../helpers/tool-attributes'

const getIcon = type => {
  const attributes = getAttributes(type)

  if (!attributes) {
    return null
  }

  return attributes.Icon
}

const getColour = type => {
  const attributes = getAttributes(type)

  if (!attributes) {
    return null
  }

  return attributes.colour
}

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-top: ${props => props.theme.dimension.spacer.sm};
`

const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 0;
`

const ListWrapper = styled.div`
  ${breakpointMd(
    props => `
    padding-bottom: ${props.theme.dimension.spacer.sm};
  `
  )}
`

const FeatureImage = styled.div`
  position: relative;
  z-index: 0;
  padding: 20px;
  background-color: black;
  border-radius: 12px;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-out;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0.5;
    box-shadow: 0 20px 50px 0
      ${props => props.theme.colour.transparent.black.dark};
    transition: opacity 0.2s ease-out;
  }

  &:hover,
  &:focus {
    transform: translate3d(0, -10px, 0);

    &:before {
      opacity: 0.7;
    }
  }
`

const FeatureImageLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ToolFunnel = ({
  type,
  title,
  description,
  features,
  to,
  video,
  border
}) => (
  <ThemeProvider theme={{ colourAccentPrimary: getColour(type) }}>
    <PageSection xl border={border}>
      <ContentContainer>
        <MediaGrid>
          <div>
            {getIcon(type)}
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ListWrapper>
              <FeatureList>
                {features.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </FeatureList>
            </ListWrapper>
            <Button to={to}>Learn more</Button>
          </div>
          <FeatureImage>
            <MediaContainer lg>
              <video src={video} playsInline loop autoPlay muted />
            </MediaContainer>
            <FeatureImageLink to={to} />
          </FeatureImage>
        </MediaGrid>
      </ContentContainer>
    </PageSection>
  </ThemeProvider>
)

ToolFunnel.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.string,
  video: PropTypes.string,
  border: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string)
}

export default ToolFunnel
