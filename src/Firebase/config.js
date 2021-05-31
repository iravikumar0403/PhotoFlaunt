import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqSxLkfG2kgoTuTr5EM97BWFfDHmjagoo",
  authDomain: "photo-flaunt.firebaseapp.com",
  databaseURL: "https://photo-flaunt-default-rtdb.firebaseio.com",
  projectId: "photo-flaunt",
  storageBucket: "photo-flaunt.appspot.com",
  messagingSenderId: "757824269106",
  appId: "1:757824269106:web:b06d09deabe58ac5a3052b",
};

firebase.initializeApp(firebaseConfig);

export const appStorage = firebase.storage();
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
