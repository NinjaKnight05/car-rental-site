// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA131Wu-vZe76jTvaO6RJHLcHI1v4tfkaA",
  authDomain: "rentndgo.firebaseapp.com",
  projectId: "rentndgo",
  storageBucket: "rentndgo.firebasestorage.app",
  messagingSenderId: "119446397236",
  appId: "1:119446397236:web:7ae2a059e70b59525b8561",
  measurementId: "G-17305D3ME3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth }