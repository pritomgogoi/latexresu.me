/**
 * @flow
 */

import React, { type Node } from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { colors } from '../../theme'

type Props = {
  children: Node,
  primary?: boolean
}

const StyledButton = styled.button`
  width: 185px;
  height: 45px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  border: none;
  margin: 10px 0;
  color: ${colors.foreground};
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-size: 0.6em;
  font-family: 'Lato';
  transition: 0.3s ease all;
  outline: none;
  background: ${(props: Props) =>
    props.primary ? colors.primary : colors.accent};

  &:hover {
    background: ${(props: Props) =>
      props.primary
        ? darken(0.1, colors.primary)
        : lighten(0.1, colors.accent)};
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`

function Button({ primary, children, ...props }: Props) {
  return (
    <StyledButton primary={primary} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
