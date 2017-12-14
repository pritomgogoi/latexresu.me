/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Input from '../Input'
import { colors } from '../../../../../theme'

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 500;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 35%;
  margin-bottom: 10px;
  text-align: left;
`

function Profile() {
  return (
    <div>
      <Title>Your Personal Info</Title>
      <Input
        name="profile[fullName]"
        label="Full Name"
        placeholder="John Smith"
      />
      <Input
        name="profile[email]"
        label="Email"
        placeholder="johnsmith@gmail.com"
      />
      <Input
        name="profile[phoneNumber]"
        label="Phone Number"
        placeholder="(555) 123-4567"
      />
      <Input
        name="profile[address]"
        label="Address"
        placeholder="New York, NY"
      />
      <Input
        name="profile[link]"
        label="Link"
        placeholder="github.com/myname"
      />
    </div>
  )
}

export default Profile
