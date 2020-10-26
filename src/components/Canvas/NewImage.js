import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { useDispatch } from './index';
import { ACTIONS } from 'reducer/app';

export default function NewImage({image, index, isSelected}) {
  const dispatch = useDispatch();
  const shapeRef = useRef();
  const transformRef = useRef();
  const [img] = useImage(image.src);

  
  // add transformer to shape
  useEffect(() => {
    if (isSelected) {
      transformRef.current.setNode(shapeRef.current);
      transformRef.current.getLayer().batchDraw();
    }
    console.log('image:', image);
  }, [isSelected]);
  
  function handleSelect() {
    dispatch({type: ACTIONS.TARGET_SHAPE, payload: image.id})
  }
  
  function handleDragEnd(e) {
    dispatch({
      type: ACTIONS.CHANGE, 
      key: 'images', 
      index,
      newAttrs: {
        ...image,
        x: e.target.x(),
        y: e.target.y(),
      }
    })
  }

  function handleTransformEnd() {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);
    dispatch({
      type: ACTIONS.CHANGE, 
      key: 'images', 
      index,
      newAttrs: {
        ...image,
        x: node.x(),
        y: node.y(),
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(node.height() * scaleY)
      }
    })
  }


  return (
    <>
      <Image
        id={image.id}
        image={img}
        ref={shapeRef}
        {...image}
        onClick={handleSelect}
        onDragEnd={handleDragEnd}
        onTransformEnd={handleTransformEnd}
        draggable
      />
      {isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  )
};
