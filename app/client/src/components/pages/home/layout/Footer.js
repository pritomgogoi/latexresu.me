/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../theme'

const StyledFooter = styled.footer`
  position: relative;
  min-height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.accent};
  color: ${colors.foreground};
  font-size: 0.75em;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: inline;

  &:after {
    content: '\00B7';
    margin: 0 10px;
  }

  &:last-child:after {
    content: '';
  }
`

const Copyright = styled.span`
  position: absolute;
  right: 50px;
  font-family: 'Open Sans';
  opacity: 0.75;

  @media screen and (max-width: 768px) {
    position: static;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <List>
        <Item>About</Item>
        <Item>Source</Item>
        <Item>Issues</Item>
        <Item>Contact</Item>
        <Item>Donate</Item>
      </List>
      <Copyright>© 2017 Saad Quadri</Copyright>
    </StyledFooter>
  )
}

export default Footer
