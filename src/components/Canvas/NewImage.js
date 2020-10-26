import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { useDispatch } from './index';
import { ACTIONS } from 'reducer/app';

export default function NewImage({key, image, index, isSelected}) {
  const dispatch = useDispatch();
  const shapeRef = useRef();
  const transformRef = useRef();
  const [img] = useImage(image.src);

  function onSelect() {dispatch({type: ACTIONS.TARGET_SHAPE, payload: image.id})}

  // add transformer to shape
  useEffect(() => {
    if (isSelected) {
      transformRef.current.setNode(shapeRef.current);
      transformRef.current.getLayer().batchDraw();
    }
    console.log('image:', image);
  }, [isSelected]);

  useEffect(() => {
    console.log("image:",image)
  },[image])


  return (
    <>
      <Image
        id={image.id}
        image={img}
        ref={shapeRef}
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        {...image}
        onClick={onSelect}
        onTap={onSelect}
        draggable
      />
    </>
  )
};
