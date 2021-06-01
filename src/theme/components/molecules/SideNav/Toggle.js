import styled from 'styled-components'
import IconChevronDown from '../../atoms/Icon/ChevronDown'
import { breakpointMd } from '../../../helpers'

export const Toggle = styled.button`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0 2rem 0 0;
  background-color: transparent;
  border: 0;
  text-align: left;
  color: ${props => props.theme.colour.grey.darkest};

  ${props =>
    props.active &&
    `
    position: absolute;
    width: 2rem;
    right: 0;
    top: 0;
  `} &:active {
    background-color: ${props => props.theme.colour.transparent.black.lightest};
  }

  ${breakpointMd`
    display: none;
  `};
`

export const ToggleChevron = styled(IconChevronDown)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  transform: rotate(${props => (props.active ? '180deg' : '0')});
`

export default Toggle
