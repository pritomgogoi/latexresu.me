/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const StyledInput = styled.input`
  height: 25px;
  width: 65%;
  outline: none;
  border: 1px solid ${colors.foreground};
  border-radius: 5px;
  padding: 5px 10px;
  &:focus {
    border: 1px solid ${colors.primary};
  }
`

const Label = styled.label`
  width: 35%;
  color: ${colors.accent};
  text-align: right;
  margin-right: 15px;
  font-size: 0.75em;
`

type Props = {
  label: string,
  name: string,
  type?: string
}

function Input({ label, name, type = 'text' }: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput type={type} />
    </Wrapper>
  )
}

export default Input
