import styled from 'styled-components'
import Shadow from '../../atoms/Shadow'
import { breakpointSm, multiply } from '../../../helpers'
import { FADE_DURATION } from './Outer'

const Overlay = styled(Shadow)`
  position: relative;
  min-width: calc(
    100% - ${props => multiply(props.theme.dimension.spacer.sm, 2)}
  );
  max-width: calc(
    100% - ${props => multiply(props.theme.dimension.spacer.sm, 2)}
  );
  margin: 10vh ${props => props.theme.dimension.spacer.sm};
  padding: ${props => props.theme.dimension.spacer.md};
  background-color: white;
  border-radius: 10px;
  transform: translateY(${props => (props.active ? '0' : '10%')});
  transition: transform ${FADE_DURATION}ms ease-out;

  ${breakpointSm(
    props => `
    min-width: 600px;
    max-width: 600px;
    padding: ${props.theme.dimension.spacer.lg};
  `
  )}
`

export default Overlay
