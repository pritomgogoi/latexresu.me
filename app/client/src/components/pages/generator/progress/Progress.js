/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Bar from './Bar'
import { Button } from '../../../shared'
import { colors } from '../../../../theme'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavButton = Button.extend`
  background: transparent;
  border: 1px solid ${colors.foreground};
  margin: 0 25px;
  width: 100px;
  height: 30px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.75em;
`

function Progress() {
  return (
    <Wrapper>
      <NavButton>← Prev</NavButton>
      <Bar />
      <NavButton>Next →</NavButton>
    </Wrapper>
  )
}

export default Progress
