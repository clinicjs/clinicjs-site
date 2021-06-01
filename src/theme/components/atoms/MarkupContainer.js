import styled from 'styled-components'

const MarkupContainer = styled.div`
  // Center align GIFs/SVGs which are not pre-processed with a responsive wrapper
  & img[src*='.gif'],
  & img[src*='.svg'] {
    display: block;
    margin: auto;
  }

  & video {
    width: 100%;
  }
`

export default MarkupContainer
