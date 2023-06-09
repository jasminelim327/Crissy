// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpMM2GWG1TLe1RFha34cQLUJy8S9x7ALU",
  authDomain: "inspire-crissy.firebaseapp.com",
  projectId: "inspire-crissy",
  storageBucket: "inspire-crissy.appspot.com",
  messagingSenderId: "36410401645",
  appId: "1:36410401645:web:0fb4d9cf20ddfbb09ab064",
  measurementId: "G-P7P02H5LS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);