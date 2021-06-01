import React from 'react'
import styled from 'styled-components'
import IconArrow from './Icon/Arrow'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  position: relative;
  padding-left: 2em;
  margin-bottom: 0.5rem;

  & span {
    position: absolute;
    left: 0;
    top: 0.25em;
    color: ${props =>
      props.theme.colourAccentPrimary
        ? props.theme.colourAccentPrimary
        : props.theme.colour.accent.primary};
  }
`

const FeatureList = ({ children, icon = <IconArrow /> }) => {
  return (
    <List>
      {React.Children.map(children, item => (
        <ListItem>
          {icon}
          {item.props.children}
        </ListItem>
      ))}
    </List>
  )
}

export default FeatureList
