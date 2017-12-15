/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colors } from '../../../../theme'

const OuterBar = styled.div`
  border-radius: 100px;
  width: 35%;
  height: 6px;
  background: ${lighten(0.15, colors.accent)};
  margin: 0 15px;
`
const InnerBar = styled.div`
  border-radius: 100px;
  width: 40%;
  height: 100%;
  background: ${colors.foreground};
`

function Bar() {
  return (
    <OuterBar>
      <InnerBar />
    </OuterBar>
  )
}

export default Bar
