import React, { createRef } from 'react';
import { useDispatchContext } from 'context/Provider'
import { ACTIONS } from 'reducer/app'

export default function ImageUploader() { 
  const fileRef = createRef();
  const dispatch = useDispatchContext()

  // Uses ref of input to run 'fileChange'
  const addImage = () => {
    fileRef.current.click();
  };

  // Uses FileReader.result (the user's file contents) to set an image
  const fileChange = event => {
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener("load", () => {
      dispatch({type: ACTIONS.IMPORTS, payload: reader.result})   
    });
  };

  return (
    <>
      <button onClick={addImage}>Add Image</button>
      <input
        type="file"
        ref={fileRef}
        onChange={fileChange}
        style={{display: "none"}}
      />
    </>
  );
}