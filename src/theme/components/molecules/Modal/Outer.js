import styled from 'styled-components'

export const FADE_DURATION = 200

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity ${FADE_DURATION}ms ease-out;
`

export default Outer
