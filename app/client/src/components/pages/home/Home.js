/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Content, Footer } from './layout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function Home() {
  return (
    <Wrapper>
      <Content />
      <Footer />
    </Wrapper>
  )
}

export default Home
