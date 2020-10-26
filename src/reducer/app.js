const ACTIONS = {
  IMPORTS: 'IMPORTS',
  IMAGES: 'IMAGES',
  TEXT: 'TEXT',
  CIRCLES: 'CIRCLES',
  RECTANGLES: 'RECTANGLES',
  DRAW: 'DRAW',
  TARGET_SHAPE: 'TARGET_SHAPE',
  CHANGE: 'CHANGE',
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
      tempImages.push({
        id: Date.now(),
        src: action.payload,
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random(),
      })
      console.log(tempImages)
      return({...state, images: tempImages})

    case ACTIONS.TARGET_SHAPE:
      return({...state, targetShape: action.payload})

    case ACTIONS.CHANGE:
      const tempChanges = [...state[action.key]]
      tempChanges[action.index] = action.newAttrs;
      console.log("tempChanges", tempChanges)
      return({...state})


    default:
      return state
  }
}