import styled from 'styled-components'
import { breakpointMd, breakpointLg } from '../../../helpers'

// Sticky is applied differently between screen sizes
// as there seems to be some cross-rule issues with grid
export const Sidebar = styled.div`
  position: sticky;
  top: ${props => props.theme.dimension.header.height};
  z-index: 1;
  transition: transform 0.3s ease-out;
  transform: translateY(
    ${props => (props.hide ? `-${props.theme.dimension.header.height}` : '0')}
  );

  ${breakpointMd`
    grid-column: 1;
    position: static;
    transform: none;
    transition: none;
  `}
`

export const SidebarStickyWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - ${props => props.theme.dimension.header.height});

  ${breakpointMd(
    props => `
    position: sticky;
    top: ${props.theme.dimension.header.height};
    z-index: 1;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  `
  )}

  ${breakpointLg(
    props => `
    top: ${props.theme.dimension.header.heightLg};
    max-height: calc(100vh - ${props.theme.dimension.header.heightLg});
  `
  )}
`

export const SidebarInner = styled.div`
  padding: ${props => props.theme.dimension.spacer.sm};
  background-color: white;
  border-bottom: solid ${props => props.theme.colour.grey.lightest} 1px;

  ${breakpointMd(
    props => `
    padding-top: ${props.theme.dimension.spacer.md};
    padding-bottom: ${props.theme.dimension.spacer.md};
    padding-left: ${props.theme.dimension.spacer.sm};
    border-bottom: 0;
  `
  )}
`
