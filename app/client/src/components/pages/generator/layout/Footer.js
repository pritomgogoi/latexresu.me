/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { colors, sizes, spacing } from '../../../../theme'

const StyledFooter = styled.footer`
  width: 100%;
  height: ${sizes.form.headerHeight};
  padding: ${spacing.form.headerPadding} 0;
  background: ${colors.background};
  box-shadow: 0 -4px 25px 2px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
`

function Footer() {
  return (
    <StyledFooter />
  )
}

export default Footer
