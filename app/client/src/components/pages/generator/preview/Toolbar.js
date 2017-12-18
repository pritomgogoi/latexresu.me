/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../shared'
import { colors } from '../../../../theme'

const Wrapper = styled.div`
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 40px;
  margin-bottom: 10px;
`

const ToolButton = Button.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 75%;
  margin: 0;
  padding: 0 30px;
  margin-left: 25px;
  border-radius: 3px;
  border: 1px solid ${colors.foreground};
  color: ${colors.foreground};

  &:hover {
    color: ${colors.foreground};
  }

  &:first-child {
    margin-left: 0;
  }
`

function Toolbar() {
  return (
    <Wrapper>
      <ToolButton>PDF</ToolButton>
      <ToolButton>TeX</ToolButton>
      <ToolButton>JSON</ToolButton>
    </Wrapper>
  )
}

export default Toolbar
