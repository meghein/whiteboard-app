import React from 'react';
import NewImage from './NewImage';
import { useCanvas } from './index';

export default function Items() {
  const state = useCanvas();

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

