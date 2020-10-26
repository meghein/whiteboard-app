import React, { createRef } from 'react';
import { useChangeItems } from '../../context/AppProvider'

export default function ImageUploader() { 
  const fileUploadEl = createRef();
  const addCanvasItem = useChangeItems()

  // Uses ref of input to run 'fileChange'
  const addImage = () => {
    fileUploadEl.current.click();
  };

  // Uses FileReader.result (the user's file contents) to set an image
  const fileChange = event => {
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener("load", () => {
      addCanvasItem('import', reader.result)   
    });
  };

  return (
    <>
      <button onClick={addImage}>Add Image</button>
      <input
        type="file"
        ref={fileUploadEl}
        onChange={fileChange}
        style={{display: "none"}}
      />
      {/* <img src={image}/> */}
    </>
  );
}