import styled from 'styled-components'

const MarginResetChildren = styled.div`
  > :first-child {
    margin-top: 0;
  }

  > h1[id]:first-child,
  > h2[id]:first-child,
  > h3[id]:first-child,
  > h4[id]:first-child,
  > h5[id]:first-child,
  > h6[id]:first-child,
  > [data-offset]:first-child {
    padding-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

export default MarginResetChildren
