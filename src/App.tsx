import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './App.css'

const App = (): React.ReactElement => (
  <div className="App">
    <Router>
      <Routes />
    </Router>
  </div>
)
export default App
