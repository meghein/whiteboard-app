import { useRef } from 'react';
// import { useCanvasItems} from '../context/AppProvider';
// import { useChangeItems} from '../context/AppProvider';

export default function useDragDrop() {
  // const state = useCanvasItems();
  // const setState = useChangeItems();

  const dragItem = useRef();
  const stageRef = useRef();

  function onDragStart(e) {
    dragItem.current = e.target.src;
    console.log(e.target)
  }
  
  function onDragOver(e) {
    e.preventDefault()
  }
  
  // function onDrop(e) {
  //   stageRef.current.setPointersPositions(e)
  //   const tempState = [...state.images];
  //   tempState.push({
  //     x: stageRef.current.getPointersPositions()[0].x,
  //     y: stageRef.current.getPointersPositions()[0].y,
  //     src: dragItem.current
  //   });
  //   setState({images: tempState})
  // }

  return {
    stageRef,
    onDragStart,
    onDragOver,
    // onDrop,
  }
};