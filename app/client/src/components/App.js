/**
 * @flow
 */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import ErrorBoundary from './ErrorBoundary'
import { Home } from './pages'
import { colors } from '../theme'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    background: ${colors.background};
    color: ${colors.accent};
    font-family: 'Lato', 'Open Sans', sans-serif;
    font-size: 1em;
    line-height: 1.5;
  }
`

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
