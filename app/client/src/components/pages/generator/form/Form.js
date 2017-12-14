/**
 * @flow
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Profile } from './sections'

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
`

const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  margin: 0;
  padding: 0;
`

function Form() {
  return (
    <StyledForm>
      <Fieldset>
        <Switch>
          <Route exact path="/generator" render={() => <Redirect to="/generator/profile" />} />
          <Route exact path="/generator/profile" component={Profile} />
          <Route exact path="*" render={() => <h1>404</h1>} />
        </Switch>
      </Fieldset>
    </StyledForm>
  )
}

export default Form
