/**
 * @flow
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Profile } from './sections'
import { colors } from '../../../../theme'
import arrow from '../../../../assets/arrow.svg'

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

const Dropdown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const Select = styled.select`
  height: 35px;
  line-height: 35px;
  flex: 1 1 auto;
  appearance: none;
  outline: 0;
  background: #fff;
  font-size: 0.9em;
  font-family: inherit;
  border: none;
  border-bottom: 1px solid ${colors.primary};
  color: ${colors.primary};
  background-image: url(${arrow});
  background-position: right 5px center;
  background-size: 10px;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: transparent;
  width: 65%;
  border-radius: 0;
`

const Label = styled.label`
  height: 35px;
  line-height: 35px;
  width: 35%;
  color: #3d386a;
  text-align: right;
  margin-right: 15px;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;
`

function Form() {
  return (
    <StyledForm>
      <Fieldset>
        <Dropdown>
          <Label>Current Section</Label>
          <Select>
            <option>Templates</option>
            <option>Profile</option>
            <option>Education</option>
            <option>Experience</option>
            <option>Skills</option>
            <option>Projects</option>
            <option>Awards</option>
          </Select>
        </Dropdown>
        <Switch>
          <Route
            exact
            path="/generator"
            render={() => <Redirect to="/generator/profile" />}
          />
          <Route exact path="/generator/profile" component={Profile} />
          <Route exact path="*" render={() => <h1>404</h1>} />
        </Switch>
      </Fieldset>
    </StyledForm>
  )
}

export default Form
