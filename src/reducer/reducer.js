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
      let tempState = [...state.imports];
      tempState.push({id: Date.now(), image: action.payload});
      return({...state, imports: tempState})
    
    case ACTIONS.IMAGES:
      tempState =  [...state.images];
      tempState.push({
        id: Date.now(),
        src: action.payload,
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random(),
      })
      return({...state, images: tempState})

    case ACTIONS.TARGET_SHAPE:
      return({...state, targetShape: action.payload})

    // case ACTIONS.CHANGE:


    default:
      return state
  }
}