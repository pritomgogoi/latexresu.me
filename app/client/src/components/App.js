/**
 * @flow
 */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ErrorBoundary, Home } from './pages'

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
