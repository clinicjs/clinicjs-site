import styled from 'styled-components'
import { breakpointMd } from '../../helpers'

const PadTop = styled.div`
  padding-top: ${props => props.theme.dimension.spacer.sm};

  ${breakpointMd(
    props => `
    padding-top: ${props.theme.dimension.spacer.md};
  `
  )}
`

export default PadTop
