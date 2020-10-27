export default function useFindShape() {
  function findShape(shapes, target) {
    let foundShape = null;
    if (Array.isArray(shapes)) {
      for (let i = 0; i < shapes.length; i++) {
        foundShape = findShape(shapes[i], target);
        if (foundShape) {
          break;
        }   
      }
    } else {
      for (let prop in shapes) {
        if(prop === 'id') {
          if(shapes[prop] === target) {
            return shapes;
          }
        }
        if (shapes[prop] instanceof Object || Array.isArray(shapes[prop])) {
          foundShape = findShape(shapes[prop], target);
          if (foundShape) {
            break;
          }
        } 
      }
    }
    return foundShape;
  }
  return ( findShape )
}



