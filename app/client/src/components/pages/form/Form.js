/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Header, Content } from './layout'

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
`

function Form() {
  return (
    <StyledForm>
      <Header />
      <Content />
    </StyledForm>
  )
}

export default Form
