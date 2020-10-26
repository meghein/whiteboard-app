import React, { createContext, useContext, useReducer } from 'react';
import reducer from '../reducer/reducer'
const StateContext = createContext();
const UpdateContext = createContext();

export function useStateContext() {
  return useContext(StateContext)
}

export function useUpdateContext() {
  return useContext(UpdateContext)
}
export default function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    imports: [],
    images: [],
    text: [],
    circles: [],
    rectangles: [],
    draw: [],
    targetShape: null,
  })
  return (
    <StateContext.Provider value={state}>
      <UpdateContext.Provider value={dispatch}>
        {children}
      </UpdateContext.Provider>
    </StateContext.Provider>
  )
}