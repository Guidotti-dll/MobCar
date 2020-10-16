import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initial, children }) => (
  <StateContext.Provider value={useReducer(reducer, initial)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
