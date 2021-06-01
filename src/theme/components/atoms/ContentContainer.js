import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: ${props => props.theme.dimension.container.content};
  margin: 0 ${props => (props.noCenter ? '0' : 'auto')};
  padding: 0
    ${props => (props.noPadding ? '0' : props.theme.dimension.spacer.sm)};
  text-align: ${props => (props.center ? 'center' : 'inherit')};
`

export default ContentContainer
