/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Progress from '../progress'

const StyledFooter = styled.footer`
  width: 100%;
  height: 8vh;
`

function Footer() {
  return (
    <StyledFooter>
      <Progress />
    </StyledFooter>
  )
}

export default Footer
