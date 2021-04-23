import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyATMkhW3Msj6UEDRMKK_cHq-dmBzmmkgVI",
    authDomain: "react-proj-curso.firebaseapp.com",
    projectId: "react-proj-curso",
    storageBucket: "react-proj-curso.appspot.com",
    messagingSenderId: "263748062545",
    appId: "1:263748062545:web:53b200cd7e2cf9e7649770"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }