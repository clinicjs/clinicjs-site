import styled from 'styled-components'
import IconClose from '../../atoms/Icon/Close'

export const Close = styled.button`
  display: block;
  position: absolute;
  top: ${props => props.theme.dimension.spacer.sm};
  right: ${props => props.theme.dimension.spacer.sm};
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  text-indent: -200vw;
  overflow: hidden;
  border-radius: 100%;

  &:active {
    background-color: ${props => props.theme.colour.transparent.black.lightest};
  }
`

export const CloseIcon = styled(IconClose)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
`

export default Close
