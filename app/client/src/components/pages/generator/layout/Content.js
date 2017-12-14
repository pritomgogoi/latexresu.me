/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Form from '../form'
import Preview from '../preview'
import { sizes, spacing } from '../../../../theme'

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  min-height: calc(
    100vh - ${sizes.form.headerHeight} - (2 * ${spacing.form.headerPadding}) - 30px
  );
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
