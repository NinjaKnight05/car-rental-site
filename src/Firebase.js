import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq9EH6DjcX1jC0yYK3sT0zhTEWyisnuec",
  authDomain: "rentalcar056.firebaseapp.com",
  projectId: "rentalcar056",
  storageBucket: "rentalcar056.appspot.com",
  messagingSenderId: "782525062404",
  appId: "1:782525062404:web:445601d6f9cb903fb84451",
  measurementId: "G-45PGZ9XTTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;