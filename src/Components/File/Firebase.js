
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvI9JPkAMoWufTZ4al1Z48b3-YwrajpsM",
  authDomain: "ssd-assignment-7e267.firebaseapp.com",
  projectId: "ssd-assignment-7e267",
  storageBucket: "ssd-assignment-7e267.appspot.com",
  messagingSenderId: "463906115323",
  appId: "1:463906115323:web:d1cb2e0e2fbf4e8d832a5e",
  measurementId: "G-D13WWLTK0R"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const storage = getStorage(firebase);

export default  storage