import React from 'react'
import MediaContainer from './MediaContainer'

const YoutubeEmbed = ({ id }) => (
  <MediaContainer>
    <iframe
      title={id}
      src={`https://www.youtube.com/embed/${id}?modestbranding=1`}
      frameBorder="0"
      allowFullScreen
    />
  </MediaContainer>
)

export default YoutubeEmbed
