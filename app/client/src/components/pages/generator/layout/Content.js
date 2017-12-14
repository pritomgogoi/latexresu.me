/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Form from '../form'
import Preview from '../preview'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 30px 0;
`

function Content() {
  return (
    <Wrapper>
      <Form />
      <Preview />
    </Wrapper>
  )
}

export default Content
