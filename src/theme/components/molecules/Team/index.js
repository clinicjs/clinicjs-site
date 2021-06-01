import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Member from './Member'
import { breakpointSm, breakpointMd, divide, multiply } from '../../../helpers'

const Outer = styled.div`
  padding-top: ${props => multiply(props.theme.dimension.spacer.md, 1.5)};
  padding-bottom: ${props => props.theme.dimension.spacer.lg};

  ${breakpointMd(
    props => `
    padding-top: ${props.theme.dimension.spacer.lg};
    padding-bottom: ${props.theme.dimension.spacer.xl};
  `
  )};
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  padding-bottom: ${props => props.theme.dimension.spacer.md};
  font-size: 1.5rem;
  font-family: ${props => props.theme.font.family.sans};
  font-weight: ${props => props.theme.font.weight.normal};
  white-space: nowrap;
  text-align: center;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colour.grey.lightest};
  }

  ${breakpointMd(
    props => `
    font-size: 2rem;
    padding-bottom: ${props.theme.dimension.spacer.lg};
  `
  )};
`

const TitleInner = styled.span`
  padding: 0 0.5em;

  ${breakpointMd(
    props => `
    padding: 0 1.5em;
  `
  )};
`

// Uses grid of 8 with span 2 to allow for ofsseting first item for desired 3/4 layout
const MemberGrid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.dimension.spacer.sm};
  grid-template-columns: repeat(
    4,
    calc(25% - ${props => divide(props.theme.dimension.spacer.sm, 1.3)})
  );
  justify-content: center;
  align-items: center;

  ${breakpointSm(
    props => `
    grid-gap: ${props.theme.dimension.spacer.md};
    grid-template-columns: repeat(8, calc(12.5% - ${
      props.theme.dimension.spacer.md
    }));
  `
  )};
`

const Team = ({ teamMembers, title }) => (
  <Outer>
    <Title>
      <TitleInner>{title}</TitleInner>
    </Title>
    <MemberGrid>
      {teamMembers.map((teamMember, i) => (
        <Member key={teamMember.title} id={i} {...teamMember} />
      ))}
    </MemberGrid>
  </Outer>
)

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default Team
