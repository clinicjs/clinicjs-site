import styled from 'styled-components'
import Link from '../../atoms/Link'
import { breakpointMd } from '../../../helpers'

export const List = styled.ul`
  list-style: none;
  display: ${props => (props.navOpen ? 'block' : 'none')};
  margin: 0;
  padding: 0;
  font-size: 0.875rem;

  ${props =>
    props.nested &&
    `
    display: ${props.open ? 'block' : 'none'};
    margin-top: -0.25em;
    padding-top: 0.25em;
    padding-left: ${props.theme.dimension.spacer.sm};
    border-left: solid ${props.theme.colour.grey.lightest} 1px;
  `};

  ${breakpointMd(
    props => `
    display: ${props.nested && !props.open ? 'none' : 'block'};
  `
  )};
`

export const ListLink = styled(Link)`
  display: block;
  padding-top: 0.4em;
  padding-bottom: 0.5em;
  font-weight: ${props =>
    props.active
      ? props.theme.font.weight.bold
      : props.theme.font.weight.normal};
  text-decoration: none;
  color: ${props =>
    props.active
      ? 'inherit'
      : props.nested
      ? props.theme.colour.grey.dark
      : props.theme.colour.grey.darkest};
`

export default List
