/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

const H1 = styled.h1`
  font-family: 'NexaBold';
  color: ${colors.accent};
`

const Em = styled.em`
  font-style: normal;
  color: ${colors.primary};
`

function Logo() {
  return (
    <H1>
      resu<Em>make</Em>
    </H1>
  )
}

export default Logo
