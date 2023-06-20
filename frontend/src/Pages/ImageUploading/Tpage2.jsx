import React, { useState } from 'react';
import { storage } from './Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { useEffect } from "react";
import { useAuth, upload } from "./Firebase";


import Avatar from 'react-avatar-edit';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export default function Tpage2() {
  const [imageUpload, setImageUpload] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageCropVisible, setImageCropVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [profile, setProfile] = useState([]);
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  
    const onClose = () => {
      setPreview(null);
    };
  
    const onCrop = (preview) => {
      setPreview(preview);
    };
  
    const saveCropImage = () => {
      if (preview) {
        setProfile([...profile, { pview: preview }]);
        setImageCropVisible(false);
      }
    };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleImageUpload = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image Uploaded');
      setProfileImage(URL.createObjectURL(imageUpload));
      closeForm();
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
  };

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])


  return (
    <div>
      <h1>Image Uploading Page</h1>
      <div>
        <img
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid green',
            cursor: 'pointer',
          }}
          src={profileImage}
          alt=""
          onClick={openForm}
        />
      </div>

      <Dialog
        visible={imageCropVisible}
        onHide={() => setImageCropVisible(false)}
        header={() => (
          <p htmlFor='' className='text-2xl font-semibold textColor'>
            Update Profile
          </p>
        )}
      >
        <div className='confirmation-content flex flex-column align-items-center'>
          <Avatar
            width={500}
            height={400}
            onCrop={onCrop}
            onClose={onClose}
            src={image}
            shadingColor='#474649'
            backgroundColor='#474649'
          />
          <div className='flex flex-column align-items-center mt-5 w-12'>
            <div className='flex justify-content-around w-12 mt-4'>
              <Button
                onClick={saveCropImage}
                label='Save'
                icon='pi pi-check'
              />
              <Button
                onClick={() => setImageCropVisible(false)}
                label='Cancel'
                icon='pi pi-times'
                className='p-button-secondary'
              />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>

      {showForm && (
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleImageUpload}>Upload Image</button>
          <button onClick={closeForm}>Cancel</button>
        </div>
      )}
    </div>
  );
}
