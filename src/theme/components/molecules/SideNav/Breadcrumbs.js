import React from 'react'
import styled from 'styled-components'

const Outer = styled.span`
  display: ${props => (props.active ? 'none' : 'inline-block')};
  width: 100%;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
`

const Breadcrumbs = ({ breadcrumbs, active }) => (
  <Outer active={active}>
    {breadcrumbs.map((item, i) => {
      const lastIndex = breadcrumbs.length - 1

      if (i === lastIndex) {
        return <b key={`${i}-${item.label}`}>{item.label}</b>
      }

      return (
        <span key={`${i}-${item.label}`}>
          {item.label}
          {i < lastIndex ? ' / ' : ' '}
        </span>
      )
    })}
  </Outer>
)

export default Breadcrumbs
