import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconGitHub from '../../atoms/Icon/GitHub'
import IconBeaker from '../../atoms/Icon/Beaker'
import Button from '../../atoms/Button'
import ButtonGroup from '../../atoms/ButtonGroup'
import SubTitle from '../../atoms/SubTitle'
import { breakpointSm, divide, multiply } from '../../../helpers'
import { getAttributes } from '../../../helpers/tool-attributes'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  padding-bottom: ${props => divide(props.theme.dimension.spacer.sm, 2)};

  ${breakpointSm(
    props => `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${multiply(props.theme.dimension.spacer.sm, 3)};
  `
  )};
`

const TitleGroup = styled.div`
  margin-top: -${props => multiply(props.theme.dimension.spacer.sm, props.hasButton ? 3 : 0.8)};

  ${breakpointSm`
    display: flex;
    align-items: center;
    height: 4.8rem;
    margin-top: 0;
  `};
`

const Title = styled.h1`
  margin: 0;
  padding-top: ${props => props.theme.dimension.spacer.sm};

  ${breakpointSm(
    props => `
    display: inline-block;
    padding-top: 0.2em;
    padding-left: ${props.theme.dimension.spacer.sm};
    line-height: 1;
  `
  )};
`

const ButtonIcon = styled.span`
  font-size: 1.5em;
  line-height: 1;

  ${breakpointSm`
    font-size: 3em;
  `};
`

const ButtonText = styled.span`
  display: inline-block;
  padding-left: 0.5em;
  line-height: 1.6;

  ${breakpointSm`
    display: block;
    min-width: 5em;
    padding-left: 0;
    padding-top: 0.5em;
    line-height: 1;
  `};
`

const ToolIntro = ({ type, title, subtitle, gitHubUrl, exampleUrl }) => {
  const { Icon } = getAttributes(type)

  return (
    <div>
      <Container>
        <TitleGroup hasButton={gitHubUrl || exampleUrl}>
          {Icon}
          <Title>{title}</Title>
        </TitleGroup>
        <ButtonGroup sm right noTop>
          {gitHubUrl && (
            <Button href={gitHubUrl} sm noArrow>
              <ButtonIcon>
                <IconGitHub />
              </ButtonIcon>
              <ButtonText>On GitHub</ButtonText>
            </Button>
          )}
          {exampleUrl && (
            <Button href={exampleUrl} sm noArrow>
              <ButtonIcon>
                <IconBeaker />
              </ButtonIcon>
              <ButtonText>Example</ButtonText>
            </Button>
          )}
        </ButtonGroup>
      </Container>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  )
}

ToolIntro.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  gitHubUrl: PropTypes.string,
  exampleUrl: PropTypes.string
}

export default ToolIntro
