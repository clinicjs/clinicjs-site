import React from 'react'
import PropTypes from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/lib/fa'

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.dimension.spacer.md};
`

const PaginationLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5em;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

const PaginationLinkText = styled.span`
  padding: 0 0.25em;
`

const Count = styled.div`
  padding: 0 1em;
`

const Pagination = ({ nextPath, prevPath, current, total }) => (
  <Outer>
    <PaginationLink to={prevPath} disabled={!prevPath}>
      <FaChevronLeft />
      <PaginationLinkText>Prev</PaginationLinkText>
    </PaginationLink>
    <Count>
      <b>{current}</b>/{total}
    </Count>
    <PaginationLink to={nextPath} disabled={!nextPath}>
      <PaginationLinkText>Next</PaginationLinkText>
      <FaChevronRight />
    </PaginationLink>
  </Outer>
)

Pagination.propTypes = {
  nextPath: PropTypes.string,
  prevPath: PropTypes.string,
  current: PropTypes.number,
  total: PropTypes.number
}

export default Pagination
