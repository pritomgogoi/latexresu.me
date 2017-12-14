import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const root = document.getElementById('root')
render(<App />, root)

// Hot reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />, root)
  })
}
