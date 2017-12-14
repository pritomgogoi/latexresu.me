/**
 * @flow
 */

import React from 'react'
import ResumakeLogo from '../../assets/logo.svg'

type Props = {
  width: number
}

function Logo({ width, ...props }: Props) {
  return <img width={width} src={ResumakeLogo} {...props} />
}

export default Logo
