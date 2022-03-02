// version 9 compat (New)
// import firebase from 'firebase/compat/app';
import * as firebase from 'firebase/app';
import * as projectAuth from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";

import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN79uWQDMverkCc28I9wLIrWA6cD7wqhs",
  authDomain: "huymoney-2d543.firebaseapp.com",
  projectId: "huymoney-2d543",
  storageBucket: "huymoney-2d543.appspot.com",
  messagingSenderId: "511666103308",
  appId: "1:511666103308:web:b02afe5db664655239fa29",
  measurementId: "G-YMGENSWEVF"
};

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


// const projectFirestore = firebase.firestore;
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectAuth,
  signInWithEmailAndPassword
  // projectFirestore, 
  // timestamp
};
