import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpointMd } from '../../../helpers'

const Outer = styled.div`
  padding-top: ${props =>
    props.noPadding ? 0 : props.theme.dimension.spacer.lg};
  text-align: center;
}
`

const Image = styled.div`
  width: 8rem;
  height: 8rem;
  margin: auto;
  border-radius: 100%;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

const Blockquote = styled.blockquote`
  margin: 0;
`

const Quote = styled.p`
  font-size: 1.8rem;
  font-family: ${props => props.theme.font.family.serif};
  font-style: italic;
  line-height: 1.1;

  &:before,
  &:after {
    content: '"';
  }

  ${breakpointMd(
    props =>
      !props.isLong &&
      `
    font-size: 2.6rem;
  `
  )};
`

const Author = styled.p`
  margin-bottom: 0;

  &:before {
    content: '- ';
  }
`

const Testimonial = ({ quote, author, image, noPadding }) => {
  const imageElement = image ? <Image src={image} /> : null

  return (
    <Outer noPadding={noPadding}>
      {imageElement}
      <Blockquote>
        <Quote isLong={quote.length > 60}>{quote}</Quote>
      </Blockquote>
      <Author>{author}</Author>
    </Outer>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string
}

export default Testimonial
