import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCRUPkDvkugGznruOQABsIpyw98qlzHbjA",
  authDomain: "asm-networks.firebaseapp.com",
  projectId: "asm-networks",
  storageBucket: "asm-networks.appspot.com",
  messagingSenderId: "185306058245",
  appId: "1:185306058245:web:82c824ef68e8e70654166c",
  measurementId: "G-R9X7BV4K0Q",
};

// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
