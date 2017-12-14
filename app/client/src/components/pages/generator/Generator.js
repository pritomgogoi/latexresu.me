/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Header, Content, Footer } from './layout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function Generator() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  )
}

export default Generator
