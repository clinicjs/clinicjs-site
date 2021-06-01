import styled from 'styled-components'

const MediaContainer = styled.div`
  position: relative;
  padding-bottom: ${props => (props.lg ? '70%' : '56.25%')};
  overflow: hidden;

  & > img,
  & > iframe,
  & > video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  ${props =>
    props.cover &&
    `
    & > img {
      height: auto;
      top: 50%;
      transform: translateY(-50%);
    }
  `};
`

export default MediaContainer
