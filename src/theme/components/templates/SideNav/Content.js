import styled from 'styled-components'
import { breakpointMd, breakpointLg, multiply, add } from '../../../helpers'

export const Content = styled.div`
  ${breakpointMd(
    props => `
    min-height: calc(100vh - ${add(
      props.theme.dimension.header.height,
      props.theme.dimension.footer.height
    )});
    max-width: calc(100vw - ${props.theme.dimension.sidebar.width});
    border-left: solid ${props.theme.colour.grey.lightest} 1px;
  `
  )}

  ${breakpointLg(
    props => `
    min-height: calc(100vh - ${add(
      props.theme.dimension.header.heightLg,
      props.theme.dimension.footer.height
    )});
  `
  )}
`

export const ContentInner = styled.div`
  padding: ${props => props.theme.dimension.spacer.md}
    ${props => props.theme.dimension.spacer.sm};

  ${breakpointMd(
    props => `
    padding-top: ${multiply(props.theme.dimension.spacer.md, 1.5)};
    padding-bottom: ${multiply(props.theme.dimension.spacer.md, 1.5)};
    padding-left: ${multiply(props.theme.dimension.spacer.md, 1.5)};
  `
  )}
`
