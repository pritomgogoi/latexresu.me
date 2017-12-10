/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

const H1 = styled.h1`
  font-size: 3em;
  font-family: 'NexaBold';
  color: ${colors.accent};
  margin: 0;
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
