/**
 * @flow
 */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import ErrorBoundary from './ErrorBoundary'
import { Home, Generator } from './pages'
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
          <Route exact path="/" component={Home} />
          <Route path="/generator" component={Generator} />
          <Route path="*" render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
