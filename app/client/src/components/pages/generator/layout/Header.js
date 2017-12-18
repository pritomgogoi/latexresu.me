/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../../shared'
import { colors, sizes, spacing } from '../../../../theme'

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: ${sizes.form.headerHeight};
  padding: ${spacing.form.headerPadding} 25px;
  background: ${colors.background};
  box-shadow: 0 4px 25px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.75em;
`

function Header() {
  return (
    <StyledHeader>
      <Logo width={150} />
    </StyledHeader>
  )
}

export default Header
