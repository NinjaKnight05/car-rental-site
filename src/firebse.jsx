// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"; // Uncomment if needed
// import { getAnalytics } from "firebase/analytics"; // Uncomment if Analytics is used

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA131Wu-vZe76jTvaO6RJHLcHI1v4tfkaA",
  authDomain: "rentndgo.firebaseapp.com",
  projectId: "rentndgo",
  storageBucket: "rentndgo.appspot.com", // Fixed typo
  messagingSenderId: "119446397236",
  appId: "1:119446397236:web:7ae2a059e70b59525b8561",
  measurementId: "G-17305D3ME3", // Optional, used for Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Optional, uncomment if needed
const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app); // Uncomment if needed

export { app, auth, db };
