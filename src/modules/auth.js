// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged,
  signOut, updateProfile
} from "firebase/auth";

import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDyAoQjoB-HgfBahyvWp2EOuExh4iZfp9o",
  authDomain: "emrapp-6b53d.firebaseapp.com",
  projectId: "emrapp-6b53d",
  storageBucket: "emrapp-6b53d.appspot.com",
  messagingSenderId: "748244803926",
  appId: "1:748244803926:web:0c737c7037331150aa76f7",
  measurementId: "G-J4D90QNNKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authStateObserver = (callback) => {
  onAuthStateChanged(getAuth(), (user => {
    callback(user);
  }), error => {
    console.log("error on sign in => ", error);
  });
}

export const signUserIn = (email, password, onUserSignIn) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("user => ", userCredential.user);
      onUserSignIn(userCredential.user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onUserSignIn(null);
    });
}

export const signUserOut = (callback) => {
  signOut(getAuth()).then(() => {
    console.log("signed out");
    callback();
  }).catch(() => {
    console.log("error occurred on signing out");
  });
}

export const updateUserProfile = (displayName, callback) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: displayName
  }).then(() => {
    // Profile updated!
    // ...
    console.log("profile successfully updated");
    callback();
  }).catch((error) => {
    // An error occurred
    // ...
    console.log("error on profile update => ", error);
  });
}

export const getCurrentUser = (callback) => {
  const auth = getAuth();
  const unsubscribeAuth = onAuthStateChanged(auth, (user => {
    callback(user);
  }));

  unsubscribeAuth();
}

export const uploadToStorage = (modality, metadata, showNotification, 
  callback, updateCallback, user) => {
  const storage = getStorage();
  // console.log('arguments => ', uploadToStorage.arguments.length);
  console.log('user => ', user)
  console.log('modality => ', modality)
  const invUploadRef = ref(storage, user.uid.concat('/', modality, '/', metadata.name));
  const uploadTask = uploadBytesResumable(invUploadRef, metadata.file);
  const unsubscribe = uploadTask.on('state_changed', snapshot => {
    console.log("Upload Started");
    showNotification("Upload Started");
    console.log("Upload snapshot => ", snapshot);
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes)
    updateCallback(progress);
  }, err => {
    console.log("Upload error => ", err);
    showNotification("An error occurred");
  }, () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("Download URL => ", downloadURL);
      showNotification("Upload Complete");
      callback(downloadURL);
      unsubscribe();
    });
  });
}

export const deleteFromStorage = (path, callback, user) => {
  const deleteRef = ref(getStorage(), user.uid.concat('/', path));
  deleteObject(deleteRef).then(() => {
    console.log("Successfully Deleted");
    callback();
  }).catch((error) => {
    console.log("An error occurred while uploading");
    console.log("error => ", error);
    console.log("error code => ", error.code);
    console.log("error message => ", error.message);
  });
}
