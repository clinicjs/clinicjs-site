import styled from 'styled-components'
import { breakpointMd } from '../../helpers'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: ${props => props.theme.dimension.spacer.md};

  > * {
    margin: 0;
  }

  ${breakpointMd(
    props => `
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props.theme.dimension.spacer.lg};
    align-items: ${props.alignTop ? 'flex-start' : 'center'};
  `
  )}
`

export default Grid
