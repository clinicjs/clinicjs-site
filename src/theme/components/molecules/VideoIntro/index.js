import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Hero from '../../atoms/Hero'
import MediaGrid from '../../atoms/MediaGrid'
import MarginResetChildren from '../../atoms/MarginResetChildren'
import Shadow from '../../atoms/Shadow'
import YouTubeEmbed from '../../atoms/YouTubeEmbed'
import { breakpointMd } from '../../../helpers'

const Title = styled.h1`
  margin-bottom: 0;

  ${breakpointMd`
    margin-bottom: 1.5rem;
  `}
`

const VideoIntro = ({ title, youTubeId, children }) => (
  <Hero>
    <MediaGrid>
      <MarginResetChildren>
        <Title>{title}</Title>
        {children}
      </MarginResetChildren>
      {Boolean(youTubeId) && (
        <Shadow>
          <YouTubeEmbed id={youTubeId} />
        </Shadow>
      )}
    </MediaGrid>
  </Hero>
)

VideoIntro.propTypes = {
  title: PropTypes.string,
  youTubeId: PropTypes.string
}

export default VideoIntro
