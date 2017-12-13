/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import FormSection from './FormSection'
import { sizes, spacing } from '../../../../theme'

const Wrapper = styled.div`
  display: flex;
  min-height: calc(
    100vh - ${sizes.form.headerHeight} - (2 * ${spacing.form.headerPadding})
  );
`

const Section = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = Section.extend``

function Content() {
  return (
    <Wrapper>
      <FormSection />
      <Right />
    </Wrapper>
  )
}

export default Content
