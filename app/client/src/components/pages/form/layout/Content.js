/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import FormSection from './FormSection'
import Preview from '../preview'
import { sizes, spacing } from '../../../../theme'

const Wrapper = styled.div`
  display: flex;
  min-height: calc(
    100vh - ${sizes.form.headerHeight} - (2 * ${spacing.form.headerPadding})
  );
`

function Content() {
  return (
    <Wrapper>
      <FormSection />
      <Preview />
    </Wrapper>
  )
}

export default Content
