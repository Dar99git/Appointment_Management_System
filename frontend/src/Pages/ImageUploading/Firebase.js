import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
//import {getStorage} from "firebase/storage"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWwKiUVtN8PCgB11X7cBtdPN7bAUFKhj8",
  authDomain: "uploadingimg-be49f.firebaseapp.com",
  projectId: "uploadingimg-be49f",
  storageBucket: "uploadingimg-be49f.appspot.com",
  messagingSenderId: "730488468611",
  appId: "1:730488468611:web:0305415016bdb648e017b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const storage = getStorage()

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}


//storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser,{photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}