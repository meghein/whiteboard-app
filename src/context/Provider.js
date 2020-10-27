import React, { createContext, useContext, useReducer } from 'react';
import reducer from 'reducer/app'
const StateContext = createContext();
const DispatchContext = createContext();

export function useStateContext() {
  return useContext(StateContext)
}

export function useDispatchContext() {
  return useContext(DispatchContext)
}
export default function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    imports: [],
    canvasElements: [],
    text: [],
    targetShape: null,
    dragShape: null,
  })
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}