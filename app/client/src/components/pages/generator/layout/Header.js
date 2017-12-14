/**
 * @flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../../../shared'
import { colors, sizes, spacing } from '../../../../theme'

const StyledHeader = styled.header`
  width: 100%;
  height: ${sizes.form.headerHeight};
  padding: ${spacing.form.headerPadding} 0;
  background: ${colors.background};
  box-shadow: 0 4px 25px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.75em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo width={150} />
      </StyledLink>
    </StyledHeader>
  )
}

export default Header
