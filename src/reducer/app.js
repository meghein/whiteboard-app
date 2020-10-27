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
      const tempImages =  [...state.images];
      let x = window.innerWidth * Math.random()
      let y = window.innerHeight * Math.random()
      if(action.coordinates) {
        x = action.coordinates.x
        y = action.coordinates.y
      }
      tempImages.push({id: Date.now(), src: action.payload, x, y})
      return({...state, images: tempImages})

    case ACTIONS.TARGET_SHAPE:
      return({...state, targetShape: action.payload})

    case ACTIONS.CHANGE:
      const tempChanges = [...state[action.key]]
      tempChanges[action.index] = action.newAttrs;
      return({...state, [action.key]: tempChanges})
    
    case ACTIONS.DRAG:
      return ({...state, dragShape: action.payload})

    case ACTIONS.DELETE:
      // const tempItems = [...state];
        // const filteredArr = tempItems.filter(item => item !== tempItems[props.targetShape])
        // props.setCanvasItems(filteredArr);
        console.log("delete payload", action.payload)
      //   if( JSON.stringify(state).indexOf("key_name") > -1 ) {
      //     console.log("Key Found");
      // }
      // else{
      //     console.log("Key not Found");
      // }
      return({...state})

    default:
      return state
  }
}