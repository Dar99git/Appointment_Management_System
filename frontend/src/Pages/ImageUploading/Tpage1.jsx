
/*import React, { useState } from 'react';
import { storage } from './Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import profile1 from "../ImageUploading/profile1.png"
//import profile from './Images/profile.png'

export default function Tpage1() {
  const [imageupload, setimageUpload] = useState(null);

  const uploadImage = () => {
    if (imageupload === null) return;
    const imageRef = ref(storage, `images/${imageupload.name + v4()}`);
    uploadBytes(imageRef, imageupload).then(() => {
      alert('Image Uploaded');
    });
  };

  return (
    <div>
      <h1>Image Uploading Page</h1>
        <img 
        style={{
            width : "200px",
            height:"200px",
            borderRadius:"50%",
            objectFit:"cover",
            border:"4px solid green",

        }}
        src = {profile1} alt =""/>

      <div className="App">
        <input type="file" onChange={(event) => setimageUpload(event.target.files[0])} />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
    </div>
  );
}
*/