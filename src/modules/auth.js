// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

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
  }));
}

export const signUserIn = (email, password, onUserSignIn) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("user => ", userCredential.user);
      onUserSignIn(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onUserSignIn(false);
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
