// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAflc-hXqsA9m9MTSEdn8mYgjLOtm8B_EY",
  authDomain: "applogin-e9aad.firebaseapp.com",
  projectId: "applogin-e9aad",
  storageBucket: "applogin-e9aad.appspot.com",
  messagingSenderId: "411774086877",
  appId: "1:411774086877:web:e593276b101e37abe1b534",
  measurementId: "G-CHY5X96751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);