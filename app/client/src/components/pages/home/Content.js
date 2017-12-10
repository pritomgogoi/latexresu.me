/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Logo, Button } from '../../shared'

const Main = styled.main`
  flex: 1;
  display: flex;
`

const Section = styled.div`
  width: 50%;
  display: flex;
`

const Left = Section.extend`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Right = Section.extend``

function Content() {
  return (
    <Main>
      <Left>
        <Logo />
        <Button primary>Make New Resume</Button>
        <Button>Continue Session</Button>
        <Button>Import JSON Resume</Button>
      </Left>
      <Right />
    </Main>
  )
}

export default Content
