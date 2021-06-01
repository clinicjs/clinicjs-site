import styled from 'styled-components'
import Grid from './Grid'
import { breakpointMd, breakpointLg } from '../../helpers'

const MediaGrid = styled(Grid)`
  ${breakpointMd(
    props => `
    grid-template-columns: 3fr 2fr;
  `
  )}

  ${breakpointLg(
    props => `
    grid-template-columns: 2.75fr 2.25fr;
    grid-gap: ${props.theme.dimension.spacer.xl};
  `
  )};
`

export default MediaGrid
