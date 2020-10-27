import React, { createContext, useContext, useRef } from 'react';
import { Layer, Stage } from 'react-konva';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTIONS } from 'reducer/app'
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

export default function Canvas(props) {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const stageRef = useRef();

  function handleDrop(e) {
    stageRef.current.setPointersPositions(e)
    console.log(dispatch)
    dispatch({
      type: ACTIONS.IMAGES,
      payload: state.dragShape,
      coordinates: {
        x: stageRef.current.getPointersPositions()[0].x,
        y: stageRef.current.getPointersPositions()[0].y,
      }
    })
  }


  return (
    <div id='canvas'
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
    >
      <Stage
        container='canvas'
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
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