import React, { useEffect } from 'react';
import NewImage from './NewImage';
import { useCanvas } from './index';

export default function Items() {
  const state = useCanvas();

  useEffect(() => {
    console.log("item state", state)
  }, [state])

  return (
    <>
      {state && state.images.map((image, index) => {
          return (
            <NewImage
              key={image.id}
              image={image}
              index={index}
              isSelected={image.id === state.targetShape}
            />
          )
      })}
    </>
  )
};

