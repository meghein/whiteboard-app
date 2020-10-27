import React, { useState, useEffect } from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTIONS } from 'reducer/app'
// import useDragDrop from 'hooks/useDragDrop';
import './style.scss';

export default function Imports() {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  // const { onDragStart } = useDragDrop();
  const [toggle, setToggle] = useState(false)
  
  function toggleButton() {
    toggle ? setToggle(false) : setToggle(true)
  }
  
  // open imports when a new file is uploaded
  useEffect(() => {
    setToggle(false)
  }, [state.imports])

  function handleImageClick(e) {
    dispatch({type: ACTIONS.IMAGES, payload: e.target.src})
  }

  function handleDrag(e) {
    dispatch({type: ACTIONS.DRAG, payload: e.target.src})
  }

  return (
    <div className='imports'>
      {toggle && <button onClick={toggleButton}>Imports</button>}
      {state.imports.length !== 0 && !toggle &&
        <button onClick={toggleButton}>Close</button>
      }
      {!toggle &&
        state.imports.map((item, index) => {
          return (
            <img
              src={item.image}
              alt={item.id}
              key={index}
              onClick={handleImageClick}
              onDragStart={handleDrag}
            />
        )})
      }
    </div>
  )
};
