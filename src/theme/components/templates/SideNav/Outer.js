import styled from 'styled-components'
import { breakpointMd, divide } from '../../../helpers'

export const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.dimension.container.page}) {
    margin-left: calc(
      50vw - (${props => divide(props.theme.dimension.container.page, 2)})
    );
  }
`

export const Container = styled.div`
  ${breakpointMd(
    props => `
    display: grid;
    grid-template-columns: ${props.theme.dimension.sidebar.width} auto;
  `
  )};
`
