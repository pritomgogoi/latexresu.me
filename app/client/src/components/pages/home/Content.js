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
  align-items: center;
`

const Left = Section.extend`
  flex-direction: column;
  justify-content: center;
`

const Right = Section.extend`
  justify-content: flex-start;
`

const ResumeContainer = styled.div`
  width: 75%;
  height: 75%;
  position: relative;
`

const Resume = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  z-index: 3;

  &:nth-child(2) {
    bottom: 10%;
    left: 10%;
    z-index: 2;
  }

  &:last-child {
    bottom: 20%;
    left: 20%;
    z-index: 1;
  }
`

function Content() {
  return (
    <Main>
      <Left>
        <Logo />
        <Button primary>Make New Resume</Button>
        <Button>Continue Session</Button>
        <Button>Import JSON Resume</Button>
      </Left>
      <Right>
        <ResumeContainer>
          <Resume />
          <Resume />
          <Resume />
        </ResumeContainer>
      </Right>
    </Main>
  )
}

export default Content
