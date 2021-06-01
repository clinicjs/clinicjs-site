import styled from 'styled-components'

const ButtonGroup = styled.div`
  text-align: ${props => (props.right ? 'right' : 'left')};

  > * {
    margin-top: ${props => (props.noTop ? 0 : props.theme.dimension.spacer.sm)};

    &:not(:last-child) {
      margin-right: ${props =>
        props.sm
          ? props.theme.dimension.spacer.sm
          : props.theme.dimension.spacer.md};
    }
  }

  ${props =>
    props.right &&
    `
    > * {
      margin-right: 0;

      &:not(:last-child) {
        margin-right: 0
      }

      &:not(:first-child) {
        margin-left: ${
          props.sm
            ? props.theme.dimension.spacer.sm
            : props.theme.dimension.spacer.md
        };
      }
    }
  `};
`

export default ButtonGroup
