/**
 * @flow
 */

import React from 'react'
import Input from '../Input'

function Profile() {
  return (
    <div>
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
