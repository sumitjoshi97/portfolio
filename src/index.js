import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

const app = (
  <Router>
    <App />
  </Router>
)
ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
