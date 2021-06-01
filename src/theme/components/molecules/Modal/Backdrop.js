import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colour.transparent.black.dark};
`

export default Backdrop
