import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MediaContainer from '../../atoms/MediaContainer'
import Link from '../../atoms/Link'
import DefaultMeta from '../../atoms/Meta'
import Muted from '../../atoms/Muted'
import { breakpointSm, breakpointMd } from '../../../helpers'

const Wrapper = styled(Link)`
  min-width: 100%;
  padding: ${props => props.theme.dimension.spacer.sm};
  background-color: white;
  box-shadow: 0 0 0 1px ${props => props.theme.colour.grey.lightest};
  border-radius: 4px;

  &:focus {
    background-color: white;
  }

  ${breakpointSm(
    props =>
      props.inline &&
      `
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: ${props.theme.dimension.spacer.md};
    align-items: center;
  `
  )};

  ${breakpointMd(
    props =>
      props.inline &&
      `
    grid-template-columns: 400px auto;
  `
  )};
`

const Inner = styled.div`
  margin-top: 1.2rem;

  ${breakpointSm(
    props =>
      props.inline &&
      `
    margin-top: 0;
  `
  )};
`

const Title = styled.h4`
  margin: 0 0 1rem;

  ${breakpointSm(
    props =>
      props.inline &&
      `
    font-size: 2rem;
  `
  )};
`

const Meta = styled(DefaultMeta)`
  margin-top: 1rem;
  margin-bottom: 0;
`

const Card = ({ title, imageUrl, meta, subMeta, children, ...props }) => {
  let image = null

  if (imageUrl) {
    image = (
      <MediaContainer cover lg>
        <img src={imageUrl} alt={title} />
      </MediaContainer>
    )
  }

  return (
    <Wrapper {...props}>
      {image}
      <Inner inline={props.inline}>
        <Title inline={props.inline}>{title}</Title>
        {children}
        <Meta>
          {meta}
          {Boolean(subMeta) && <Muted>{subMeta}</Muted>}
        </Meta>
      </Inner>
    </Wrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  meta: PropTypes.string
}

export default Card
