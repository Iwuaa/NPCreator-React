import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Home from './views/home'
import Builder from './views/builder'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Page} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Builder} exact path="/builder" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
