import React, { createContext, useContext, useRef } from 'react';
import { Layer, Stage } from 'react-konva';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTIONS } from 'reducer/app';
import Items from './Items';
import './style.scss';

// "bridged" context by creating a new Provider as a child of the Stage
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
  const stageRef = useRef();

  function handleKeyDown(e) {
    if (e.keyCode === 8) {
      dispatch({type: ACTIONS.DELETE, payload: state.targetShape})
    }
  }

  function handleDrop(e) {
    stageRef.current.setPointersPositions(e)
    dispatch({
      type: ACTIONS.IMAGES,
      payload: state.dragShape,
      coordinates: {
        x: stageRef.current.getPointersPositions()[0].x,
        y: stageRef.current.getPointersPositions()[0].y,
      }
    })
    console.log(state)
  }

  function handleDeselect(e) {
    if (e.target === e.target.getStage() || e.target.hasName("container")) {
      dispatch({type: ACTIONS.TARGET_SHAPE, payload: null})
    }
  }

  return (
    <div
      id='canvas'
      tabIndex='0'
      onKeyDown={handleKeyDown}
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
    >
      <Stage
        container='canvas'
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseDown={handleDeselect}
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