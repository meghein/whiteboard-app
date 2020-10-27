const ACTIONS = {
  IMPORTS: 'IMPORTS',
  IMAGES: 'IMAGES',
  TEXT: 'TEXT',
  CIRCLES: 'CIRCLES',
  RECTANGLES: 'RECTANGLES',
  DRAW: 'DRAW',
  TARGET_SHAPE: 'TARGET_SHAPE',
  CHANGE: 'CHANGE',
  DRAG: 'DRAG',
  DELETE: 'DELETE',
}

export { ACTIONS }

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.IMPORTS:
      const tempImports = [...state.imports];
      tempImports.push({id: Date.now(), image: action.payload});
      return({...state, imports: tempImports})
    
    case ACTIONS.IMAGES:
      const tempImages =  [...state.canvasElements];
      let x = window.innerWidth * Math.random()
      let y = window.innerHeight * Math.random()
      if(action.coordinates) {
        x = action.coordinates.x
        y = action.coordinates.y
      }
      tempImages.push({id: Date.now(), src: action.payload, x, y})
      return({...state, canvasElements: tempImages})

    case ACTIONS.TARGET_SHAPE:
      return({...state, targetShape: action.payload})

    case ACTIONS.CHANGE:
      const tempChanges = [...state.canvasElements]
      tempChanges[action.index] = action.newAttrs;
      return({...state, canvasElements: tempChanges})
    
    case ACTIONS.DRAG:
      return ({...state, dragShape: action.payload})

    // case ACTIONS.DELETE:
    //   // const tempItems = [...state];
    //     // const filteredArr = tempItems.filter(item => item !== tempItems[props.targetShape])
    //     // props.setCanvasItems(filteredArr);
    //     for (let key in state) {
    //       state[key] === action.payload
    //     }
    //     console.log("delete payload", action.payload)
    //   return({...state})

    default:
      return state
  }
}