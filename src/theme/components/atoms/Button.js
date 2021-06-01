import React from 'react'
import styled, { css } from 'styled-components'
import Link from './Link'
import IconArrow from './Icon/Arrow'

const getButtonColour = theme =>
  theme.colourAccentPrimary || theme.colour.accent.primary

const styles = css`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  position: relative;
  z-index: 0;
  width: ${props => (props.block ? '100%' : 'auto')};
  padding: ${props =>
    props.sm
      ? '0.5em'
      : props.bold
      ? '1.5em'
      : props.thin
      ? '0.4em 0.8em'
      : '1em'};
  font-size: ${props => (props.sm ? '0.75rem' : '1rem')};
  font-family: ${props => props.theme.font.family.sans};
  font-weight: ${props =>
    props.sm ? props.theme.font.weight.normal : props.theme.font.weight.bold};
  text-decoration: none;
  text-align: center;
  border: solid ${props => getButtonColour(props.theme)}
    ${props => (props.bold ? '2px' : '1px')};
  color: ${props => getButtonColour(props.theme)};
  border-radius: 4px;
  background-color: transparent;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  & > span {
    margin-left: 1em;
    transition: transform 0.2s ease-out;
  }

  &:hover:before,
  &:focus:before {
    opacity: 0.1;
  }

  &:active:before {
    opacity: 0.2;
  }

  &:hover > span,
  &:focus > span {
    transform: translateX(10%);
  }

  &:focus {
    box-shadow: none;
    background-color: transparent;
  }

  ${props =>
    props.primary &&
    `
   background-color: ${getButtonColour(props.theme)};
   color: ${
     getButtonColour(props.theme) === 'white'
       ? props.theme.colour.accent.primary
       : 'white'
   };

   &:before {
    background-color: ${props.theme.colour.transparent.black.light};
   }

   &:focus {
     background-color: ${getButtonColour(props.theme)};
   }
  `};

  ${props =>
    props.noArrow &&
    `
    & > span {
      margin-left: 0;
      transition: none;
    }

    &:hover > span,
    &:focus > span {
      transform: none;
    }
  `};
`

const StyledButton = styled.button`
  ${styles};
`

const StyledLink = styled(Link)`
  ${styles};
`

const Button = ({ children, ...props }) => {
  const ButtonComponent = props.href || props.to ? StyledLink : StyledButton
  const icon = props.noArrow ? null : <IconArrow />

  return (
    <ButtonComponent {...props}>
      {children}
      {icon}
    </ButtonComponent>
  )
}

export default Button
