/**
 * @flow
 */

import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { colors } from '../../theme'

const Button = styled.button`
  width: 200px;
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
  background: ${props => (props.primary ? colors.primary : colors.accent)};

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    background: ${props =>
      props.primary
        ? darken(0.1, colors.primary)
        : lighten(0.1, colors.accent)};
  }
`

export default Button
