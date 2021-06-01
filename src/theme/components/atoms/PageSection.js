import styled from 'styled-components'
import { breakpointMd, multiply } from '../../helpers'

const PageSection = styled.div`
  padding: ${props => props.theme.dimension.spacer.md} 0;

  // lg / xl
  ${props =>
    (props.lg || props.xl) &&
    `
    padding: ${multiply(props.theme.dimension.spacer.md, 1.5)} 0;
  `}

  // Top border
  ${props =>
    props.border &&
    `
    border-top: solid ${props.theme.colour.grey.lightest} 1px;
  `}

  // Inverted
  ${props =>
    props.isAlt &&
    `
    background-color: ${props.theme.colour.grey.lightest};
  `}

  ${breakpointMd(
    props =>
      props.lg &&
      `
    padding: ${props.theme.dimension.spacer.lg} 0;
  `
  )}

  ${breakpointMd(
    props =>
      props.xl &&
      `
    padding: ${props.theme.dimension.spacer.xl} 0;
  `
  )}
`

export default PageSection
