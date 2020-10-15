import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
