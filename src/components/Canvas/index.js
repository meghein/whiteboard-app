import React, { createContext, useContext, useEffect } from 'react';
import { Layer, Stage } from 'react-konva';
import { useStateContext, useDispatchContext } from 'context/Provider';
// import useDragDrop from '../hooks/useDragDrop';
import Items from './Items';
import './style.scss';

// "bridged" context by creating a Provider as a child of the Stage
const CanvasState = createContext();
const CanvasDispatch = createContext();
export function useCanvas() {
  return useContext(CanvasState)
}
export function useDispatch() {
  return useContext(CanvasDispatch)
}

export default function Canvas() {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  // const { onDrop, onDragOver } = useDragDrop;

  useEffect(() => {
    console.log("canvas state", state);
  }, [state])

  return (
    <div id='canvas'>
      <Stage
        container='canvas'
        width={window.innerWidth}
        height={window.innerHeight}
        // onDrop={onDrop}
        // onDragOver={onDragOver}
      >
        <CanvasState.Provider value={state}>
          <CanvasDispatch.Provider value={dispatch}>
            <Layer>
              <Items/>
            </Layer>
          </CanvasDispatch.Provider> 
        </CanvasState.Provider>
      </Stage>
    </div>
  )
}
