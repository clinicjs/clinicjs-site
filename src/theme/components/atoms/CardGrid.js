import React from 'react'
import styled from 'styled-components'
import { breakpointMd } from '../../helpers'

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.dimension.spacer.md};

  ${breakpointMd(
    props =>
      !props.vertical &&
      `
    margin: auto;
    width: calc(33.33% * ${React.Children.count(props.children)});
    grid-template-columns: repeat(${React.Children.count(props.children)}, 1fr)
  `
  )};
`

export default CardGrid
