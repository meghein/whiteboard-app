import React, { useState, createContext, useContext } from 'react';
const StateContext = createContext();
const UpdateContext = createContext();

export function useStateContext() {
  return useContext(StateContext)
}

export function useUpdateContext() {
  return useContext(UpdateContext)
}
export default function Provider({children}) {
  const [state, setState] = useState({
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
      <UpdateContext.Provider value={setState}>
        {children}
      </UpdateContext.Provider>
    </StateContext.Provider>
  )
}