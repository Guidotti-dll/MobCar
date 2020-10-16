import React from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'

import { initial, mainReducer } from './context/reducer'
import { StateProvider } from './context/state'

const App = () => {
  return (
    <StateProvider initial={initial} reducer={mainReducer}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  )
}

export default App
